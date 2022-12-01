

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["“A photograph is the pause button of life.” - Unknown", "“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.” — Aaron Siskind", "“When I have a camera in my hand, I know no fear.” — Alfred Eisenstaedt", "“Which of my photographers is my favorite? The one i'm going to take tomorrow.” -Imogen Cunningham", "“When people look at my pictures I want them to feel the way they do when they want to read a line of a poem twice” - Robert Frank"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
   
   
}