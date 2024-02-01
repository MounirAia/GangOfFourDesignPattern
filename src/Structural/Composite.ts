// Composite design pattern allows you to create this tree structure where you have
// a component that can do some task X and a composite object that has multiple components but can also do some task X.
// The composite object acts like a single component and a container of components at the same time.

// Example replica from: https://refactoring.guru/design-patterns/composite

interface Graphic {
  move(x: number, y: number): void;
  draw(): void;
}

class Dot implements Graphic {
  constructor(protected x: number, protected y: number) {}

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  draw(): void {
    console.log(`Drawing a dot at (${this.x}, ${this.y})`);
  }
}

class Circle extends Dot {
  constructor(x: number, y: number, private radius: number) {
    super(x, y);
  }

  draw(): void {
    console.log(
      `Drawing a circle at (${this.x}, ${this.y}) with radius ${this.radius}`
    );
  }
}

// the composite
// the compound graphic can have multiple children
// it can event have other compound graphics
class CompoundGraphic implements Graphic {
  protected children: Graphic[] = [];
  private static entitiesID = 0;
  private id: number;
  constructor() {
    this.id = CompoundGraphic.entitiesID++;
  }

  add(graphic: Graphic): CompoundGraphic {
    this.children.push(graphic);
    return this;
  }

  remove(graph: Graphic): void {
    this.children = this.children.filter((child) => child !== graph);
  }

  move(x: number, y: number): void {
    console.log(`Moving the compound graphic ${this.id}`);
    this.children.forEach((child) => child.move(x, y));
  }

  draw(): void {
    console.log(`Drawing the compound graphic ${this.id}`);
    this.children.forEach((child) => child.draw());
  }
}

class ImageEditor implements Graphic {
  constructor(private entity: Graphic) {}

  move(x: number, y: number) {
    console.log("Moving the entity...");
    this.entity.move(x, y);
  }

  draw() {
    console.log("Drawing the entity...");
    this.entity.draw();
  }
}

const CG = new CompoundGraphic();
CG.add(new Dot(1, 2));
CG.add(new Circle(2, 3, 4));
CG.add(new Dot(5, 6));
CG.add(new CompoundGraphic().add(new Dot(7, 8)).add(new Circle(9, 10, 11)));

const imgEditor = new ImageEditor(CG);
imgEditor.draw();
imgEditor.move(4, 5);
imgEditor.draw();
