export default function parseQuiz(text) {

    if (!text) return [];

    const questions = [];

    // Split the response into question blocks
    const blocks = text.split(/\*\*\d+\.\s/).filter(Boolean);

    blocks.forEach((block) => {

        const lines = block
            .split("\n")
            .map(line => line.trim())
            .filter(line => line !== "");

        if (lines.length === 0) return;

        const question = lines[0].replace(/\*\*/g, "");

        const options = [];

        let correctLetter = "";

        lines.forEach(line => {

            // A. ...
            // B. ...
            // C. ...
            // D. ...

            if (/^[A-D]\./.test(line)) {

                options.push(line);

            }

            if (line.includes("Correct Answer")) {

                const match = line.match(/Correct Answer:\s*([A-D])/i);

                if (match) {

                    correctLetter = match[1];

                }

            }

        });

        // Find full correct option
        let answer = "";

        options.forEach(option => {

            if (option.startsWith(correctLetter + ".")) {

                answer = option;

            }

        });

        questions.push({

            question,

            options,

            answer

        });

    });

    return questions;

}