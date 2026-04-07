import {
  EmailConfigurationError,
  parseRfqSubmission,
  sendRfqEmail,
} from "@/lib/rfq-mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "The request payload could not be read." },
      { status: 400 },
    );
  }

  const submission = parseRfqSubmission(payload);

  if (!submission) {
    return Response.json(
      { ok: false, message: "Please fill in all required fields with valid details." },
      { status: 400 },
    );
  }

  try {
    await sendRfqEmail(submission);

    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof EmailConfigurationError) {
      console.error(error.message);
      return Response.json({ ok: false, message: error.message }, { status: 500 });
    }

    if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof error.message === "string"
    ) {
      console.error("Failed to send RFQ email", error.message);
      return Response.json(
        { ok: false, message: error.message },
        { status: 500 },
      );
    } else {
      console.error("Failed to send RFQ email", error);
    }

    return Response.json(
      { ok: false, message: "The server could not send your request right now." },
      { status: 500 },
    );
  }
}
