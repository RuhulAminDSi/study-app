# Facade pattern — Square and Circle classes, ShapeMaker facade, FacadePatternDemo

- **Source image:** `09_facade-shapemaker-steps-3-4.jpg` (original file name `494486715_9680213455427552_5749180994276106591_n.jpg`)
- **Page:** 9 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **21**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- **The page begins mid-code:** two stray closing braces `}` / `}` at the top belong to the previous class in the same printed solution (the `Rectangle` class), whose body ends on the preceding page of the original document, not in this set. Recorded verbatim as `[continuation of previous code block]`.
- The full solution this page belongs to starts on printed page 20 (question 8, Facade pattern) and continues on the page after this one (Step 5, Verify the output).
- This page is entirely the **continuation** of a worked answer — it contains no new question.
- Java source is reproduced verbatim in fenced `java` blocks; file/class names are kept as printed (including `Square`, `Circle`, `Rectangle`, `ShapeMaker`, `FacadePatternDemo`).
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

`[continuation of previous code block — two closing braces, printed at the top of the page]`

```java
      }
}
```

**Square.java**

```java
public class Square implements Shape {
    @Override
    public void draw() {
        System.out.println("Square::draw()");
    }
}
```

**Circle.java**

```java
public class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Circle::draw()");
    }
}
```

**Step 3:** Create a facade class.

**ShapeMaker.java**

```java
public class ShapeMaker {
    private Shape circle;
    private Shape rectangle;
    private Shape square;
    public ShapeMaker() {
        circle = new Circle();
        rectangle = new Rectangle();
        square = new Square();
    }
public void drawCircle(){
    circle.draw();
}
public void drawRectangle(){
    rectangle.draw();
}
public void drawSquare(){
    square.draw();
}
}
```

**Step 4:** Use the facade to draw various types of shapes.

**FacadePatternDemo.java**

```java
public class FacadePatternDemo {
    public static void main(String[] args) {
        ShapeMaker shapeMaker = new ShapeMaker();
        shapeMaker.drawCircle();
        shapeMaker.drawRectangle();
        shapeMaker.drawSquare();
    }
}
```

[Step 5 — "Verify the output" — is on the following page of the original document]
