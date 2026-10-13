# Agent flexibility and reactivity; Facade pattern question 8 with Shape interface and Rectangle class

- **Source image:** `11_agents-and-facade-interface.jpg` (original file name `494661967_9680213515427546_4356200265857445326_n.jpg`)
- **Page:** 11 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **20**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- **The page begins mid-answer:** the bullet list at the top (Flexibility / Reactive / Pro-Activeness) is the tail of an answer to an earlier agent question whose numbering is not visible on this page. The bullets run to the end of question 7 on the preceding page of the original document, not in this set.
- The same agent-and-agents material continues onto the next page of the original document (printed page 19), so this page and that one belong to the same paper.
- **Figures transcribed as text.** The UML-style class diagram accompanying question 8 has been re-rendered as a markdown table of its classes, attributes and operations, plus a list of its labelled relationships, so that every printed name is preserved (FacadePatternDemo, ShapeMaker, Shape <<interface>>, Circle, Rectangle, Square, and the edge labels "asks", "creates", "implements", "implement").
- **Cut off at the bottom edge:** the `Rectangle.java` listing stops at the `System.out.println("Rectangle::draw()");` line — the two closing braces are on the following page of the original document (printed page 21). Marked `[cut off]`.
- Java source is reproduced verbatim in fenced `java` blocks.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (Tail of an answer about agents — question number not visible on this page)

- **Flexibility**
  - Reactive: Agents must recognize their surroundings and react to the changes within them.
  - Proactive: Agents shouldn't only act in response to their surroundings but also be able to take the initiative when appropriate and effect an opportunistic, goal-directed performance.
  - Social: Agents should work with humans or other non-human agents.
- **Reactive**
  - Reactive systems maintain ongoing interactions with their environment, responding to its changes.
  - The program's environment may be guaranteed, not concerned about its success or failure.
  - Most environments are dynamic, meaning that things are constantly in a state of change, and information is incomplete.
  - Programs must make provisions for the possibility of failure.
- **Pro-Activeness:** Taking the initiative to create goals and try to meet them.

**8. We are going to create a Shape interface and concrete classes implementing the Shape interface. A facade class ShapeMaker is defined as a next step. ShapeMaker class uses the concrete classes to delegate user calls to these classes. FacadePatternDemo, our demo class, will use ShapeMaker class to show the results.**

*[Figure — class diagram. Re-rendered as text; all printed names preserved.]*

| Class | Attributes | Operations | Notes |
|---|---|---|---|
| FacadePatternDemo | | +main() : void | |
| ShapeMaker | -circle : Shape<br>-rectangle : Shape<br>-square : Shape | +ShapeMaker()<br>+drawCircle() : void<br>+drawRectangle() : void<br>+drawSquare() : void | |
| Shape | | +draw() : void | `<<interface>>` |
| Circle | | +draw() : void | |
| Rectangle | | +draw() : void | |
| Square | | +draw() : void | |

Labelled relationships in the figure:

- FacadePatternDemo —asks→ ShapeMaker
- ShapeMaker —creates→ { Circle, Rectangle, Square }
- Circle —implements→ Shape
- Rectangle —implement→ Shape
- Square —implements→ Shape

**Answer:**

**Step 1:**

Create an interface.

**Shape.java**

```java
public interface Shape {
    void draw();
}
```

**Step 2:** Create concrete classes implementing the same interface.

**Rectangle.java**

```java
public class Rectangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Rectangle::draw()");
```

`[cut off — the two closing braces of the class are on the following page of the original document]`
