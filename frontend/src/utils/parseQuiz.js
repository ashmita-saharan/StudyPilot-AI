export default function parseQuiz(text) {

    if (!text) return [];

    // If Gemini response is an object instead of a string
    if (typeof text === "object") {
        if (Array.isArray(text)) {
            text = text.map(item => item.text || "").join("\n");
        } else {
            text = text.text || "";
        }
    }

    text = text.replace(/\r/g, "");

    const questions = [];

    // Split at **1. **2. etc.
    const blocks = text.split(/\*\*\d+\.\s+/).filter(Boolean);

    blocks.forEach((block) => {

        const lines = block
            .split("\n")
            .map(line => line.trim())
            .filter(Boolean);

        if (!lines.length) return;

        const question = lines[0].replace(/\*\*/g, "").trim();

        const options = [];

        let correctLetter = "";

        lines.forEach(line => {

            // Accept:
            // A.
            // A)
            // A :
            // A -
            // A:
            if (/^[A-D][\.\)\:\-]/i.test(line)) {

                options.push(
                    line.replace(/\*\*/g, "").trim()
                );

            }

            const match = line.match(/Correct\s*Answer\s*:\s*([A-D])/i);

            if (match) {

                correctLetter = match[1].toUpperCase();

            }

        });

        let answer = "";

        options.forEach(option => {

            if (
                option.startsWith(correctLetter + ".") ||
                option.startsWith(correctLetter + ")") ||
                option.startsWith(correctLetter + ":") ||
                option.startsWith(correctLetter + " -") ||
                option.startsWith(correctLetter + "-")
            ) {

                answer = option;

            }

        });

        questions.push({

            id: questions.length + 1,

            question,

            options,

            answer

        });

    });

    return questions;

}