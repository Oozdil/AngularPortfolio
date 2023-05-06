import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private snake: { x: number, y: number }[] = [];
  private direction: 'up' | 'down' | 'left' | 'right' = 'right';
  private food: { x: number, y: number };
  private gameOver = false;
  private score = 0;
  private image = new Image();

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.image.src = "./assets/space.png";
    this.resetGame();
    setInterval(() => this.tick(), 100);
  }
  private resetGame() {
    this.snake = [{ x: 0, y: 0 }];
    this.direction = 'right';
    this.food = {
      x: Math.floor(Math.random() * this.canvas.nativeElement.width / 10) * 10,
      y: Math.floor(Math.random() * this.canvas.nativeElement.height / 10) * 10
    };
    this.gameOver = false;
    this.score = 0;
  }

  private tick() {
    if (this.gameOver) {
      return;
    }
    this.advanceSnake();
    this.draw();
  }
  private advanceSnake() {
    const head = this.snake[0];
    let newHead: { x: number, y: number };
    if (this.direction === 'up') {
      newHead = { x: head.x, y: head.y - 10 };
    } else if (this.direction === 'down') {
      newHead = { x: head.x, y: head.y + 10 };
    } else if (this.direction === 'left') {
      newHead = { x: head.x - 10, y: head.y };
    } else if (this.direction === 'right') {
      newHead = { x: head.x + 10, y: head.y };
    }
    if (this.outOfBounds(newHead) || this.snakeCollision(newHead)) {
      this.gameOver = true;
      return;
    }
    this.snake.unshift(newHead);
    if (this.foodCollision(newHead)) {
      this.score++;
      this.spawnFood();
    } else {
      this.snake.pop();
    }
  }

  private outOfBounds(position: { x: number, y: number }) {
    return (
      position.x < 0 ||
      position.y < 0 ||
      position.x >= this.canvas.nativeElement.width ||
      position.y >= this.canvas.nativeElement.height
    );
  }
  private snakeCollision(position: { x: number, y: number }) {
    return this.snake.some(segment => segment.x === position.x && segment.y === position.y);
  }

  private foodCollision(position: { x: number, y: number }) {
    return this.food.x === position.x && this.food.y === position.y;
  }

  private spawnFood() {
    this.food = {
      x: Math.floor(Math.random() * this.canvas.nativeElement.width / 10) * 10,
      y: Math.floor(Math.random() * this.canvas.nativeElement.height / 10) * 10
    };
  }
  private draw() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    this.ctx.drawImage(this.image, 0, 0, 400, 400);


    this.ctx.fillStyle = 'yellow';
    this.snake.forEach(segment => this.ctx.fillRect(segment.x, segment.y, 9, 9));
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.snake[0].x, this.snake[0].y, 9, 9);


    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.food.x, this.food.y, 10, 10);

    this.ctx.font = '20px Arial';
    this.ctx.fillStyle = 'black';

    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Score: ${this.score}`, 10, 25);
    if (this.gameOver) {
      this.ctx.fillText('Game Over', 150, this.canvas.nativeElement.height / 2);
      this.ctx.fillText('Please tab space to play again', 60, this.canvas.nativeElement.height / 2 + 50);
    }
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log("***" + event.key + "***");
    if (event.key === 'ArrowUp' && this.direction !== 'down') {
      this.direction = 'up';
    } else if (event.key === 'ArrowDown' && this.direction !== 'up') {
      this.direction = 'down';
    } else if (event.key === 'ArrowLeft' && this.direction !== 'right') {
      this.direction = 'left';
    } else if (event.key === 'ArrowRight' && this.direction !== 'left') {
      this.direction = 'right';
    } else if (event.key === ' ' && this.gameOver) {
      this.resetGame();
    }
  }

}
