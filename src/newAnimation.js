export function newAnimation(ctx, canvas) {
  class Letter {
    constructor() {
      this.size = 100;
      this.time = 500 + Math.random() * 100;
      this.timeLeft = this.time;
      this.text = letters[Math.floor(Math.random() * letters.length)];

      this.color = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255),
      };

      this.speed = {
        x: -10 + Math.random() * 15,
        y: -20 + Math.random() * 10,
      };
      this.location = {
        x: canvas.width - 100,
        y: canvas.height - 50,
      };
    }

    setLocation(speedX, speedY) {
      this.location.x += speedX;
      this.location.y += speedY;
    }

    get updateVisibilty() {
      this.timeLeft--;
      this.size--;

      if (this.size <= 0 || this.timeLeft <= 0) {
        return new Letter();
      }

      return this;
    }

    static draw() {
      ctx.globalCompositeOperation = "source-over";
      Letter.clear();

      for (let i = 0; i < particles.length; i++) {
        let particle = particles[i],
          opacity = particle.timeLeft / particle.time;

        ctx.beginPath();

        ctx.fillStyle =
          "rgba(" +
          particle.color.r +
          "," +
          particle.color.g +
          "," +
          particle.color.b +
          "," +
          opacity +
          ")";
        ctx.font = particle.size + "px monotonregular";

        ctx.fillText(particle.text, particle.location.x, particle.location.y);
        ctx.fill();

        particle.setLocation(particle.speed.x, particle.speed.y);
        particles[i] = particle.updateVisibilty;
      }

      return window.requestAnimationFrame(Letter.draw);
    }

    static clear() {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
  const maximumLetters = 20;

  let letters = "CONTACT!".split(""),
    particles = [];

  for (let i = 0; i < maximumLetters; i++) {
    particles[i] = new Letter();
  }

  return window.requestAnimationFrame(Letter.draw);
}
