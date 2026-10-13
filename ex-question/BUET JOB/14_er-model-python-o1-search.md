# Java inheritance completion, school-database ER weak entity, Python first-10-lines, O(1) search

- **Source image:** `14_er-model-python-o1-search.jpg` (original file name `494750135_9665564430225788_4070432627094295498_n.jpg`)
- **Page:** 14 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **225**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- **The page begins mid-code:** the `public Gamma(int alpha, int beta, int gamma){ … }` constructor and the `@Override public void display(){ … }` block at the top are the tail of question 6 ("Complete the following java program") that starts on printed page 224. Grey highlight boxes are drawn around parts of this printed answer — reproduced verbatim, including the `public class main(` line which is printed without the customary `class` keyword ordering.
- **Figure transcribed as text.** The ER diagram for question 7 has been re-rendered as two tables (entities with their attributes; relationships with cardinality) so that every printed name, attribute and M/N/1 marker is preserved. Entities: STUDENT, COURSE, LECTURER, SUBJECTS, plus the composite ADDRESS attribute. Relationships: Attends, Teaches, Deals, HAS.
- Note a discrepancy in the source: the printed relationship list under question 7 names "Teaches", "Deals" and "HAS", while the diagram box is drawn with the label "Has" — both spellings are recorded as printed.
- The Python answer for question 8 is reproduced verbatim including the space in `next(myfile)` and the `x` / `range(10)` pairing as printed.
- Questions 8 and 9 have printed answers of "[Try yourself]" for question 9 and a Python snippet for question 8; reproduced as printed, not verified or corrected.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

`[continuation of question 6, "Complete the following java program", from printed page 224]`

```java
    public Gamma(int alpha, int beta, int gamma){
        super(alpha, beta);
            this.gamma = gamma;
    }
    @override
    public void display(){
        super.display();
        System.out.println("Gamma"+gamma);
    }
}
public class main(
    public static void main(String[]args){
        Gamma g = new Gamma(3,30,10);
        g.display();
    }
}
```

**7. What is a weak entity for data modeling using the entity relationship model find out any weak entity and its identify relationship for the school database? Which of the following table?**

```text
Student(student_id, student_name, admission_year)
Teacher(teacher_id, teacher_name, teacher_join date)
Course(course_id, subject_name, credit)
```

*[Figure — ER diagram, re-rendered as text. All printed labels preserved.]*

Entities and their attributes:

| Entity | Key attributes | Other attributes |
|---|---|---|
| STUDENT | STUDENT_ID (underlined / key) | STUDENT_NAME, AGE, HOBBY, DOB, and composite attribute ADDRESS { DOOR, STREET, CITY, STATE, PIN }, and COURSE_ID |
| COURSE | COURSE_ID (underlined / key) | COURSE_NAME |
| LECTURER | LECTURER_ID (underlined / key) | LECTURER_NAME, COURSE_ID |
| SUBJECTS | SUBJECT_ID (underlined / key) | SUBJECT_NAME, LECTURER_ID |

Relationships and their cardinalities:

| Relationship | Between | Cardinalities as printed |
|---|---|---|
| Attends | STUDENT — COURSE | M (student side), N (course side) |
| Teaches | STUDENT — LECTURER | 1 (student side), M (lecturer side) |
| Deals | LECTURER — COURSE | M (lecturer side), M (course side) |
| HAS / Has | COURSE — SUBJECTS | 1 (course side), M (subjects side) |
| Teaches | LECTURER — SUBJECTS | 1 (lecturer side), 1 (subjects side) |

**8. Write a function in Python programming language which takes a filename as parameter, orders first 10 line in output.**

**Answer:**

```python
with open ("datafile") as myfile:
    head = [next(myfile) for x in xrange(10)]
    print head
```

**9. You are giving to store a set of objects and you want to use a data structure. Where the expected running time to search an item is O(1). Which data structure is suitable to serve your purpose?**

**Answer:** [Try yourself]
