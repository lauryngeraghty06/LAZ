const quotes = [
    `"Every time I go to a movie, it's magic, no matter what the movie's about." – Steven Spielberg`,
    `"Cinema is a matter of what's in the frame and what's out." – Martin Scorsese`,
    `"The most honest form of filmmaking is to make a film for yourself." – Peter Jackson`,
    `"A film is never really good unless the camera is an eye in the head of a poet." – Orson Welles`,
    `"If it can be written, or thought, it can be filmed." – Stanley Kubrick`
];

let index = 0;

document.getElementById("quote-next").addEventListener("click", () => {
    index = (index + 1) % quotes.length;
    document.getElementById("quote-text").textContent = quotes[index];
});