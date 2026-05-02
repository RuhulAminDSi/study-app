import type { Module } from '../../types'

const m11: Module = {
  title: "11. Object Oriented Programming (OOP)",
  titleBn: "১১. অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)",
  level: "Intermediate",
  lessons: [
    {
      id: "oop1",
      title: "Philosophy, Advantages & Core Concepts of OOP",
      titleBn: "OOP এর দর্শন, সুবিধা ও মূল ধারণা",
      content: `📌 PHILOSOPHY OF OBJECT ORIENTED PROGRAMMING (OOP)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Core Philosophy:
"Program the way we think about the real world."

In the real world, everything is an object:
• A car (has color, engine, speed; can start, stop, drive)
• A student (has name, id, grades; can study, take exam)
• A bank account (has balance, owner; can deposit, withdraw)

OOP brings this real-world model into programming.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Key Principles of OOP Philosophy:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Principle           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Abstraction         │ Focus on WHAT an object does, not HOW       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Encapsulation       │ Bundle data + methods together, hide details│
├─────────────────────┼─────────────────────────────────────────────┤
│ Inheritance         │ Objects can reuse features of existing ones │
├─────────────────────┼─────────────────────────────────────────────┤
│ Polymorphism        │ "One interface, many forms"                 │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 ADVANTAGES OF OOP OVER STRUCTURED PROGRAMMING

┌─────────────────────┬─────────────────────────────────────────────┐
│ Advantage           │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Encapsulation       │ Data security - internal details hidden     │
├─────────────────────┼─────────────────────────────────────────────┤
│ Reusability         │ Inheritance allows code reuse               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Flexibility         │ Polymorphism enables same interface,        │
│                     │ different implementations                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ Abstraction         │ Focus on what, not how - reduces complexity │
├─────────────────────┼─────────────────────────────────────────────┤
│ Modularity          │ Independent objects - easier to debug/maintain│
├─────────────────────┼─────────────────────────────────────────────┤
│ Scalability         │ Better for large, complex systems           │
├─────────────────────┼─────────────────────────────────────────────┤
│ Real-world Modeling │ Maps directly to real-world entities        │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Comparison: OOP vs Structured Programming

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Aspect              │ Structured (Procedural)│ OOP                  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Program Structure   │ Functions/Procedures │ Classes & Objects    │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Data & Functions    │ Separate             │ Combined (Encapsulation)│
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Reusability         │ Limited (copy-paste) │ High (Inheritance)   │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Flexibility         │ Low                  │ High (Polymorphism)  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Best suited for     │ Small projects       │ Medium to large systems│
└─────────────────────┴──────────────────────┴──────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 CLASSES AND OBJECTS

Definition:
• Class: Blueprint/template for creating objects
• Object: Specific instance of a class

Java Example:
┌─────────────────────────────────────────────────────────────────┐
│ class Student {                                                 │
│     String name;      // attribute (state)                      │
│     int age;          // attribute (state)                      │
│                                                                │
│     void display() {  // method (behavior)                      │
│         System.out.println("Name: " + name + ", Age: " + age);  │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                            │
│     public static void main(String[] args) {                   │
│         Student s1 = new Student();  // object creation        │
│         s1.name = "Alice";           // setting attributes     │
│         s1.age = 20;                                           │
│         s1.display();                // calling method         │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔒 ENCAPSULATION

Definition: Bundling data and methods together, hiding internal details.

Access Specifiers in Java:

┌─────────────────────┬─────────────────────────────────────────────┐
│ Access Modifier     │ Visibility                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ private             │ Only within the same class                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ default (no keyword)│ Within the same package                     │
├─────────────────────┼─────────────────────────────────────────────┤
│ protected           │ Same package + subclasses                   │
├─────────────────────┼─────────────────────────────────────────────┤
│ public              │ Accessible from anywhere                    │
└─────────────────────┴─────────────────────────────────────────────┘

Encapsulation Example:
┌─────────────────────────────────────────────────────────────────┐
│ class BankAccount {                                             │
│     private double balance;  // hidden from outside             │
│                                                                │
│     public void deposit(double amount) {                        │
│         if(amount > 0) balance += amount;                       │
│     }                                                           │
│                                                                │
│     public double getBalance() {                                │
│         return balance;                                         │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Static and Non-Static Members

┌─────────────────────┬─────────────────────────────────────────────┐
│ Member Type         │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ Static Members      │ Belong to class, shared across all objects  │
│                     │ Accessed via ClassName.member               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Non-Static Members  │ Belong to individual object, each object    │
│                     │ has its own copy                            │
└─────────────────────┴─────────────────────────────────────────────┘

Example:
┌─────────────────────────────────────────────────────────────────┐
│ class Counter {                                                 │
│     static int count = 0;  // static - shared                   │
│     int id;               // non-static - unique per object      │
│                                                                │
│     Counter() {                                                 │
│         count++;                                                │
│         id = count;                                             │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

✅ SUMMARY
• OOP models real-world entities as objects
• Advantages: Encapsulation, Reusability, Flexibility, Scalability
• Class = blueprint, Object = instance
• Encapsulation hides internal details via access specifiers
• Static members belong to class, non-static to objects`,
      contentBn: `📌 অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর দর্শন

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 মূল দর্শন:
"প্রোগ্রামিং করো সেইভাবে যেভাবে আমরা বাস্তব জগৎ সম্পর্কে চিন্তা করি।"

বাস্তব জগতে সবকিছুই একটি অবজেক্ট:
• একটি গাড়ি (রং, ইঞ্জিন, গতি আছে; চলতে পারে, থামতে পারে)
• একজন ছাত্র (নাম, আইডি, গ্রেড আছে; পড়তে পারে, পরীক্ষা দিতে পারে)
• একটি ব্যাংক অ্যাকাউন্ট (ব্যালেন্স, মালিক আছে; জমা করতে পারে, তোলতে পারে)

OOP এই বাস্তব-জগতের মডেলকে প্রোগ্রামিংয়ে নিয়ে আসে।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 OOP দর্শনের মূল নীতি:

┌─────────────────────┬─────────────────────────────────────────────┐
│ নীতি                │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাবস্ট্রাকশন     │ অবজেক্ট WHAT করে তাতে ফোকাস, HOW না         │
├─────────────────────┼─────────────────────────────────────────────┤
│ এনক্যাপসুলেশন      │ ডেটা + মেথড একসাথে বান্ডেল, বিবরণ লুকানো    │
├─────────────────────┼─────────────────────────────────────────────┤
│ ইনহেরিট্যান্স       │ অবজেক্ট বিদ্যমান অবজেক্টের বৈশিষ্ট্য ব্যবহার│
├─────────────────────┼─────────────────────────────────────────────┤
│ পলিমর্ফিজম         │ "এক ইন্টারফেস, অনেক রূপ"                     │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 স্ট্রাকচার্ড প্রোগ্রামিংয়ের তুলনায় OOP-এর সুবিধা

┌─────────────────────┬─────────────────────────────────────────────┐
│ সুবিধা              │ বর্ণনা                                      │
├─────────────────────┼─────────────────────────────────────────────┤
│ এনক্যাপসুলেশন       │ ডেটা নিরাপত্তা - অভ্যন্তরীণ বিবরণ লুকানো    │
├─────────────────────┼─────────────────────────────────────────────┤
│ পুনঃব্যবহারযোগ্যতা │ ইনহেরিট্যান্স কোড পুনঃব্যবহার সক্ষম করে     │
├─────────────────────┼─────────────────────────────────────────────┤
│ নমনীয়তা            │ পলিমর্ফিজম একই ইন্টারফেসে ভিন্ন বাস্তবায়ন   │
├─────────────────────┼─────────────────────────────────────────────┤
│ অ্যাবস্ট্রাকশন      │ WHAT-এ ফোকাস, HOW নয় - জটিলতা কমায়        │
├─────────────────────┼─────────────────────────────────────────────┤
│ মডুলারিটি           │ স্বাধীন অবজেক্ট - ডিবাগ/রক্ষণাবেক্ষণ সহজ    │
├─────────────────────┼─────────────────────────────────────────────┤
│ স্কেলেবিলিটি        │ বড় ও জটিল সিস্টেমের জন্য ভালো               │
└─────────────────────┴─────────────────────────────────────────────┘

✅ সারাংশ
• OOP বাস্তব জগতের সত্তাকে অবজেক্ট হিসেবে মডেল করে
• সুবিধা: এনক্যাপসুলেশন, পুনঃব্যবহারযোগ্যতা, নমনীয়তা, স্কেলেবিলিটি
• ক্লাস = ব্লুপ্রিন্ট, অবজেক্ট = ইনস্ট্যান্স
• এনক্যাপসুলেশন অ্যাক্সেস স্পেসিফায়ারের মাধ্যমে বিবরণ লুকায়
• স্ট্যাটিক সদস্য ক্লাসের, নন-স্ট্যাটিক অবজেক্টের`,
      takeaways: [
        "OOP models real-world entities as objects",
        "Advantages: Encapsulation, Reusability, Flexibility, Scalability",
        "Class = blueprint, Object = instance",
        "Encapsulation hides internal details via access specifiers",
        "Static members belong to class, non-static to objects"
      ],
      takeawaysBn: [
        "OOP বাস্তব জগতের সত্তাকে অবজেক্ট হিসেবে মডেল করে",
        "সুবিধা: এনক্যাপসুলেশন, পুনঃব্যবহারযোগ্যতা, নমনীয়তা, স্কেলেবিলিটি",
        "ক্লাস = ব্লুপ্রিন্ট, অবজেক্ট = ইনস্ট্যান্স",
        "এনক্যাপসুলেশন অ্যাক্সেস স্পেসিফায়ারের মাধ্যমে বিবরণ লুকায়",
        "স্ট্যাটিক সদস্য ক্লাসের, নন-স্ট্যাটিক অবজেক্টের"
      ],
      level: "Intermediate"
    },
    {
      id: "oop2",
      title: "Constructors, Destructors, Arrays, Pointers & Inheritance",
      titleBn: "কনস্ট্রাক্টর, ডিস্ট্রাক্টর, অ্যারে, পয়েন্টার ও ইনহেরিট্যান্স",
      content: `📌 CONSTRUCTORS, DESTRUCTORS & COPY CONSTRUCTORS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 Constructor: Special method automatically called when object is created.
🔷 Destructor: Special method automatically called when object is destroyed.
🔷 Copy Constructor: Creates new object as copy of existing object.

Java Constructor Examples:
┌─────────────────────────────────────────────────────────────────┐
│ class Student {                                                 │
│     String name;                                                │
│     int age;                                                    │
│                                                                │
│     // Default Constructor                                      │
│     Student() {                                                 │
│         name = "Unknown";                                       │
│         age = 0;                                                │
│     }                                                           │
│                                                                │
│     // Parameterized Constructor                                │
│     Student(String n, int a) {                                  │
│         name = n;                                               │
│         age = a;                                                │
│     }                                                           │
│                                                                │
│     // Copy Constructor (Java uses clone or copy constructor)   │
│     Student(Student s) {                                        │
│         this.name = s.name;                                     │
│         this.age = s.age;                                       │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         Student s1 = new Student("Alice", 20);  // Parameterized│
│         Student s2 = new Student(s1);            // Copy        │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

Note: Java has garbage collection instead of destructors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 ARRAY OF OBJECTS

Definition: Array where each element is an object of a class.

Java Example:
┌─────────────────────────────────────────────────────────────────┐
│ class Student {                                                 │
│     String name;                                                │
│     int age;                                                    │
│                                                                │
│     void display() {                                            │
│         System.out.println("Name: " + name + ", Age: " + age);  │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         // Array of 3 Student objects                          │
│         Student[] students = new Student[3];                    │
│                                                                │
│         // Initialize objects                                  │
│         students[0] = new Student();                            │
│         students[0].name = "Alice";                             │
│         students[0].age = 20;                                   │
│                                                                │
│         students[1] = new Student();                            │
│         students[1].name = "Bob";                               │
│         students[1].age = 22;                                   │
│                                                                │
│         students[2] = new Student();                            │
│         students[2].name = "Carol";                             │
│         students[2].age = 21;                                   │
│                                                                │
│         // Display all students                                │
│         for(int i = 0; i < students.length; i++) {              │
│             students[i].display();                              │
│         }                                                       │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 OBJECT POINTERS AND REFERENCES

In Java, all objects are accessed via references (similar to pointers in C++).

Java Example:
┌─────────────────────────────────────────────────────────────────┐
│ class Student {                                                 │
│     String name;                                                │
│     int age;                                                    │
│                                                                │
│     void display() {                                            │
│         System.out.println("Name: " + name + ", Age: " + age);  │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         // Reference to object (similar to pointer)             │
│         Student s = new Student();                              │
│         s.name = "Alice";                                       │
│         s.age = 20;                                             │
│         s.display();                                            │
│                                                                │
│         // Reference to existing object                         │
│         Student ref = s;  // both refer to same object          │
│         ref.age = 21;                                           │
│         s.display();     // Age changed: 21                     │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌳 INHERITANCE: SINGLE AND MULTIPLE

Definition: Child class acquires properties and behavior from parent class.

🔹 Single Inheritance: Child inherits from ONE parent class.

Java Example:
┌─────────────────────────────────────────────────────────────────┐
│ class Vehicle {                                                 │
│     void start() {                                              │
│         System.out.println("Vehicle started");                  │
│     }                                                           │
│ }                                                               │
│                                                                │
│ class Car extends Vehicle {                                     │
│     void honk() {                                               │
│         System.out.println("Car honks");                        │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         Car c = new Car();                                      │
│         c.start();  // inherited from Vehicle                   │
│         c.honk();   // own method                               │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

🔹 Multiple Inheritance: Java does NOT support multiple inheritance with classes (uses interfaces instead).

Interface Example (Java's alternative):
┌─────────────────────────────────────────────────────────────────┐
│ interface Vehicle {                                             │
│     void start();                                               │
│ }                                                               │
│                                                                │
│ interface Horn {                                                │
│     void honk();                                                │
│ }                                                               │
│                                                                │
│ class Car implements Vehicle, Horn {                            │
│     public void start() {                                       │
│         System.out.println("Car started");                      │
│     }                                                           │
│     public void honk() {                                        │
│         System.out.println("Car honks");                        │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Comparison Table

┌─────────────────────┬──────────────────────┬──────────────────────┐
│ Feature             │ Single Inheritance    │ Multiple Inheritance │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Parent Classes      │ One                   │ More than one        │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Complexity          │ Simple                │ Can be complex       │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Java Support        │ Yes (extends)         │ Via interfaces only  │
├─────────────────────┼──────────────────────┼──────────────────────┤
│ Diamond Problem     │ No                    │ Possible in C++      │
└─────────────────────┴──────────────────────┴──────────────────────┘

✅ SUMMARY
• Constructor: Initializes object (default, parameterized, copy)
• Destructor: Java uses garbage collection
• Array of Objects: Store multiple objects in array
• Object References: Java uses references (like pointers)
• Single Inheritance: extends one parent class
• Multiple Inheritance: Java uses interfaces`,
      contentBn: `📌 কনস্ট্রাক্টর, ডিস্ট্রাক্টর ও কপি কনস্ট্রাক্টর

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔷 কনস্ট্রাক্টর: বিশেষ মেথড যা অবজেক্ট তৈরি হলে স্বয়ংক্রিয়ভাবে কল হয়।
🔷 ডিস্ট্রাক্টর: বিশেষ মেথড যা অবজেক্ট ধ্বংস হলে স্বয়ংক্রিয়ভাবে কল হয়।
🔷 কপি কনস্ট্রাক্টর: বিদ্যমান অবজেক্টের কপি হিসেবে নতুন অবজেক্ট তৈরি করে।

জাভা কনস্ট্রাক্টর উদাহরণ:
┌─────────────────────────────────────────────────────────────────┐
│ class Student {                                                 │
│     String name;                                                │
│     int age;                                                    │
│                                                                │
│     // ডিফল্ট কনস্ট্রাক্টর                                      │
│     Student() {                                                 │
│         name = "Unknown";                                       │
│         age = 0;                                                │
│     }                                                           │
│                                                                │
│     // প্যারামিটারাইজড কনস্ট্রাক্টর                            │
│     Student(String n, int a) {                                  │
│         name = n;                                               │
│         age = a;                                                │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

নোট: জাভাতে ডিস্ট্রাক্টরের পরিবর্তে গার্বেজ কালেকশন ব্যবহার হয়।

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 অবজেক্টের অ্যারে

সংজ্ঞা: অ্যারে যার প্রতিটি উপাদান একটি ক্লাসের অবজেক্ট।

জাভা উদাহরণ:
┌─────────────────────────────────────────────────────────────────┐
│ class Student {                                                 │
│     String name;                                                │
│     int age;                                                    │
│                                                                │
│     void display() {                                            │
│         System.out.println("Name: " + name + ", Age: " + age);  │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         // ৩টি Student অবজেক্টের অ্যারে                         │
│         Student[] students = new Student[3];                    │
│                                                                │
│         students[0] = new Student();                            │
│         students[0].name = "Alice";                             │
│         students[0].age = 20;                                   │
│                                                                │
│         students[1] = new Student();                            │
│         students[1].name = "Bob";                               │
│         students[1].age = 22;                                   │
│                                                                │
│         students[2] = new Student();                            │
│         students[2].name = "Carol";                             │
│         students[2].age = 21;                                   │
│                                                                │
│         for(int i = 0; i < students.length; i++) {              │
│             students[i].display();                              │
│         }                                                       │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌳 ইনহেরিট্যান্স: সিঙ্গেল ও মাল্টিপল

সংজ্ঞা: চাইল্ড ক্লাস প্যারেন্ট ক্লাস থেকে বৈশিষ্ট্য ও আচরণ অর্জন করে।

🔹 সিঙ্গেল ইনহেরিট্যান্স: চাইল্ড একটি প্যারেন্ট ক্লাস থেকে ইনহেরিট করে।

জাভা উদাহরণ:
┌─────────────────────────────────────────────────────────────────┐
│ class Vehicle {                                                 │
│     void start() {                                              │
│         System.out.println("Vehicle started");                  │
│     }                                                           │
│ }                                                               │
│                                                                │
│ class Car extends Vehicle {                                     │
│     void honk() {                                               │
│         System.out.println("Car honks");                        │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

🔹 মাল্টিপল ইনহেরিট্যান্স: জাভা ক্লাসের সাথে মাল্টিপল ইনহেরিট্যান্স সমর্থন করে না (ইন্টারফেস ব্যবহার করে)।

✅ সারাংশ
• কনস্ট্রাক্টর: অবজেক্ট ইনিশিয়ালাইজ করে (ডিফল্ট, প্যারামিটারাইজড, কপি)
• ডিস্ট্রাক্টর: জাভা গার্বেজ কালেকশন ব্যবহার করে
• অবজেক্টের অ্যারে: একাধিক অবজেক্ট সংরক্ষণ করে
• অবজেক্ট রেফারেন্স: জাভা রেফারেন্স ব্যবহার করে
• সিঙ্গেল ইনহেরিট্যান্স: extends একটি প্যারেন্ট ক্লাস
• মাল্টিপল ইনহেরিট্যান্স: জাভা ইন্টারফেস ব্যবহার করে`,
      takeaways: [
        "Constructor initializes objects (default, parameterized, copy)",
        "Array of objects stores multiple objects in array",
        "Object references in Java are like pointers",
        "Single Inheritance: extends one parent class",
        "Multiple Inheritance: Java uses interfaces"
      ],
      takeawaysBn: [
        "কনস্ট্রাক্টর অবজেক্ট ইনিশিয়ালাইজ করে (ডিফল্ট, প্যারামিটারাইজড, কপি)",
        "অবজেক্টের অ্যারে একাধিক অবজেক্ট সংরক্ষণ করে",
        "জাভাতে অবজেক্ট রেফারেন্স পয়েন্টারের মতো",
        "সিঙ্গেল ইনহেরিট্যান্স: extends একটি প্যারেন্ট ক্লাস",
        "মাল্টিপল ইনহেরিট্যান্স: জাভা ইন্টারফেস ব্যবহার করে"
      ],
      level: "Advanced"
    },
    {
      id: "oop3",
      title: "Polymorphism, Exceptions, Templates & Multi-threading",
      titleBn: "পলিমর্ফিজম, এক্সসেপশন, টেমপ্লেট ও মাল্টি-থ্রেডিং",
      content: `📌 POLYMORPHISM IN OOP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Definition: "One interface, many forms" - same method name behaves differently for different objects.

Types of Polymorphism:
1. Compile-time (Static) → Method Overloading
2. Run-time (Dynamic) → Method Overriding

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 1. Method Overloading (Compile-time)

Same method name with different parameters in the same class.

Java Example:
┌─────────────────────────────────────────────────────────────────┐
│ class Calculator {                                              │
│     int add(int a, int b) {                                     │
│         return a + b;                                           │
│     }                                                           │
│                                                                │
│     double add(double a, double b) {                            │
│         return a + b;                                           │
│     }                                                           │
│                                                                │
│     int add(int a, int b, int c) {                              │
│         return a + b + c;                                       │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 2. Method Overriding (Run-time)

Derived class provides new implementation of base class method.

Java Example:
┌─────────────────────────────────────────────────────────────────┐
│ class Animal {                                                  │
│     void speak() {                                              │
│         System.out.println("Animal speaks");                    │
│     }                                                           │
│ }                                                               │
│                                                                │
│ class Dog extends Animal {                                      │
│     @Override                                                   │
│     void speak() {                                              │
│         System.out.println("Dog barks");                        │
│     }                                                           │
│ }                                                               │
│                                                                │
│ class Cat extends Animal {                                      │
│     @Override                                                   │
│     void speak() {                                              │
│         System.out.println("Cat meows");                        │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         Animal a1 = new Dog();                                  │
│         Animal a2 = new Cat();                                  │
│         a1.speak();  // Dog barks                               │
│         a2.speak();  // Cat meows                               │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📐 ABSTRACT CLASSES

Definition: Class that cannot be instantiated; contains abstract methods.

Java Example:
┌─────────────────────────────────────────────────────────────────┐
│ abstract class Shape {                                          │
│     abstract void draw();  // abstract method (no body)         │
│                                                                │
│     void display() {        // concrete method                  │
│         System.out.println("This is a shape");                  │
│     }                                                           │
│ }                                                               │
│                                                                │
│ class Circle extends Shape {                                    │
│     void draw() {                                               │
│         System.out.println("Drawing Circle");                   │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ EXCEPTIONS (Error Handling)

Definition: Runtime errors that can be caught and handled to prevent program crashes.

Java Keywords:
• try → block to monitor for exceptions
• catch → block to handle exceptions
• throw → signal an exception
• throws → declares method may throw exception
• finally → block executed always

Java Example:
┌─────────────────────────────────────────────────────────────────┐
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         int a = 10, b = 0;                                      │
│                                                                │
│         try {                                                   │
│             int result = a / b;                                 │
│             System.out.println("Result: " + result);            │
│         } catch (ArithmeticException e) {                       │
│             System.out.println("Exception: " + e.getMessage()); │
│         } finally {                                             │
│             System.out.println("Finally block executed");       │
│         }                                                       │
│         System.out.println("Program continues...");             │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 OBJECT ORIENTED I/O IN JAVA

Java uses classes and objects for input/output operations.

Basic I/O Example:
┌─────────────────────────────────────────────────────────────────┐
│ import java.util.Scanner;                                       │
│                                                                │
│ class Student {                                                 │
│     String name;                                                │
│     int age;                                                    │
│                                                                │
│     void input() {                                              │
│         Scanner sc = new Scanner(System.in);                    │
│         System.out.print("Enter name: ");                       │
│         name = sc.nextLine();                                   │
│         System.out.print("Enter age: ");                        │
│         age = sc.nextInt();                                     │
│     }                                                           │
│                                                                │
│     void display() {                                            │
│         System.out.println("Name: " + name + ", Age: " + age);  │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

File I/O Example:
┌─────────────────────────────────────────────────────────────────┐
│ import java.io.*;                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         try {                                                   │
│             FileWriter writer = new FileWriter("file.txt");     │
│             writer.write("Hello, OOP I/O!");                    │
│             writer.close();                                     │
│                                                                │
│             FileReader reader = new FileReader("file.txt");     │
│             BufferedReader br = new BufferedReader(reader);     │
│             System.out.println(br.readLine());                  │
│             br.close();                                         │
│         } catch(IOException e) {                                │
│             System.out.println("Error: " + e.getMessage());     │
│         }                                                       │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 GENERICS (Templates in Java)

Definition: Allow type-safe, reusable code that works with different data types.

🔹 Generic Method:
┌─────────────────────────────────────────────────────────────────┐
│ public class Main {                                             │
│     public static <T> void display(T value) {                   │
│         System.out.println("Value: " + value);                  │
│     }                                                           │
│                                                                │
│     public static void main(String[] args) {                    │
│         display(100);        // Integer                         │
│         display(3.14);       // Double                          │
│         display("Hello");    // String                          │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

🔹 Generic Class:
┌─────────────────────────────────────────────────────────────────┐
│ class Box<T> {                                                  │
│     private T content;                                          │
│                                                                │
│     public void setContent(T content) {                         │
│         this.content = content;                                 │
│     }                                                           │
│                                                                │
│     public T getContent() {                                     │
│         return content;                                         │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         Box<Integer> intBox = new Box<>();                      │
│         intBox.setContent(123);                                 │
│         System.out.println(intBox.getContent());                │
│                                                                │
│         Box<String> strBox = new Box<>();                       │
│         strBox.setContent("Hello");                             │
│         System.out.println(strBox.getContent());                │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧵 MULTI-THREADED PROGRAMMING

Definition: Concurrent execution of two or more threads within a program.

Creating Threads in Java:

Method 1: Extending Thread Class
┌─────────────────────────────────────────────────────────────────┐
│ class MyThread extends Thread {                                 │
│     public void run() {                                         │
│         for(int i = 1; i <= 5; i++) {                           │
│             System.out.println(Thread.currentThread().getName() │
│                               + ": " + i);                      │
│         }                                                       │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         MyThread t1 = new MyThread();                           │
│         t1.start();                                             │
│                                                                │
│         for(int i = 1; i <= 5; i++) {                           │
│             System.out.println("Main: " + i);                   │
│         }                                                       │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

Method 2: Implementing Runnable Interface
┌─────────────────────────────────────────────────────────────────┐
│ class MyRunnable implements Runnable {                          │
│     public void run() {                                         │
│         for(int i = 1; i <= 5; i++) {                           │
│             System.out.println("Runnable: " + i);               │
│         }                                                       │
│     }                                                           │
│ }                                                               │
│                                                                │
│ public class Main {                                             │
│     public static void main(String[] args) {                    │
│         Thread t = new Thread(new MyRunnable());                │
│         t.start();                                              │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

Thread Synchronization:
┌─────────────────────────────────────────────────────────────────┐
│ class Counter {                                                 │
│     private int count = 0;                                      │
│                                                                │
│     public synchronized void increment() {                      │
│         count++;                                                │
│     }                                                           │
│                                                                │
│     public int getCount() {                                     │
│         return count;                                           │
│     }                                                           │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

Thread States in Java:
┌─────────────────────┬─────────────────────────────────────────────┐
│ State               │ Description                                 │
├─────────────────────┼─────────────────────────────────────────────┤
│ New                 │ Thread created but not started              │
├─────────────────────┼─────────────────────────────────────────────┤
│ Runnable            │ Ready to run, waiting for CPU               │
├─────────────────────┼─────────────────────────────────────────────┤
│ Running             │ Thread is executing                         │
├─────────────────────┼─────────────────────────────────────────────┤
│ Waiting             │ Waiting indefinitely                        │
├─────────────────────┼─────────────────────────────────────────────┤
│ Timed Waiting       │ Waiting for specified time                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Terminated          │ Thread finished execution                   │
└─────────────────────┴─────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Summary Table

┌─────────────────────┬─────────────────────────────────────────────┐
│ Concept             │ Key Points                                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Polymorphism        │ Overloading (compile-time),                 │
│                     │ Overriding (run-time)                       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Exceptions          │ try, catch, throw, finally                  │
├─────────────────────┼─────────────────────────────────────────────┤
│ Generics            │ Type-safe generic methods and classes       │
├─────────────────────┼─────────────────────────────────────────────┤
│ Multi-threading     │ Concurrent execution via Thread/Runnable    │
└─────────────────────┴─────────────────────────────────────────────┘

✅ SUMMARY
• Polymorphism: Overloading (compile-time), Overriding (run-time)
• Abstract Classes: Cannot instantiate, contain abstract methods
• Exceptions: try-catch-finally for error handling
• OOP I/O: Scanner, FileReader/Writer, BufferedReader
• Generics: Type-safe generic methods and classes (Box<T>)
• Multi-threading: Extend Thread or implement Runnable
• Synchronization: synchronized keyword prevents race conditions`,
      contentBn: `📌 পলিমর্ফিজম (Polymorphism)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

সংজ্ঞা: "এক ইন্টারফেস, অনেক রূপ" - একই মেথড নাম ভিন্ন অবজেক্টের জন্য ভিন্ন আচরণ করে।

পলিমর্ফিজমের প্রকার:
১. কম্পাইল-টাইম (স্ট্যাটিক) → মেথড ওভারলোডিং
২. রান-টাইম (ডাইনামিক) → মেথড ওভাররাইডিং

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ১. মেথড ওভারলোডিং (কম্পাইল-টাইম)

একই ক্লাসে ভিন্ন প্যারামিটার সহ একই মেথড নাম।

জাভা উদাহরণ:
┌─────────────────────────────────────────────────────────────────┐
│ class Calculator {                                              │
│     int add(int a, int b) { return a + b; }                     │
│     double add(double a, double b) { return a + b; }            │
│     int add(int a, int b, int c) { return a + b + c; }          │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 ২. মেথড ওভাররাইডিং (রান-টাইম)

ডেরাইভড ক্লাস বেস ক্লাসের মেথডের নতুন বাস্তবায়ন দেয়।

জাভা উদাহরণ:
┌─────────────────────────────────────────────────────────────────┐
│ class Animal { void speak() { System.out.println("Speaks"); } } │
│ class Dog extends Animal { void speak() { System.out.println(   │
│                                "Barks"); } }                    │
│ class Cat extends Animal { void speak() { System.out.println(   │
│                                "Meows"); } }                    │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ এক্সসেপশন (এরর হ্যান্ডলিং)

সংজ্ঞা: রানটাইম এরর যা ধরা ও হ্যান্ডেল করা যায় প্রোগ্রাম ক্র্যাশ প্রতিরোধ করতে।

জাভা কীওয়ার্ড: try, catch, throw, throws, finally

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 জেনেরিক্স (জাভাতে টেমপ্লেট)

সংজ্ঞা: টাইপ-নিরাপদ, পুনঃব্যবহারযোগ্য কোড যা ভিন্ন ডেটা টাইপের সাথে কাজ করে।

জেনেরিক ক্লাস উদাহরণ:
┌─────────────────────────────────────────────────────────────────┐
│ class Box<T> {                                                  │
│     private T content;                                          │
│     public void setContent(T content) { this.content = content; }│
│     public T getContent() { return content; }                   │
│ }                                                               │
│                                                                │
│ Box<Integer> intBox = new Box<>();  // Integer type             │
│ Box<String> strBox = new Box<>();   // String type              │
└─────────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧵 মাল্টি-থ্রেডেড প্রোগ্রামিং

সংজ্ঞা: একটি প্রোগ্রামের মধ্যে দুই বা ততোধিক থ্রেডের সমকালীন এক্সিকিউশন।

জাভাতে থ্রেড তৈরি:

পদ্ধতি ১: থ্রেড ক্লাস এক্সটেন্ড করা
পদ্ধতি ২: রানেবল ইন্টারফেস ইমপ্লিমেন্ট করা

থ্রেড স্টেট:
নিউ → রানেবল → রানিং → টার্মিনেটেড
              ↓
           ওয়েটিং/টাইমড ওয়েটিং

✅ সারাংশ
• পলিমর্ফিজম: ওভারলোডিং (কম্পাইল-টাইম), ওভাররাইডিং (রান-টাইম)
• অ্যাবস্ট্রাক্ট ক্লাস: ইনস্ট্যান্টিয়েট করা যায় না, অ্যাবস্ট্রাক্ট মেথড থাকে
• এক্সসেপশন: try-catch-finally এরর হ্যান্ডলিংয়ের জন্য
• জেনেরিক্স: টাইপ-নিরাপদ জেনেরিক মেথড ও ক্লাস (Box<T>)
• মাল্টি-থ্রেডিং: থ্রেড ক্লাস এক্সটেন্ড বা রানেবল ইমপ্লিমেন্ট
• সিনক্রোনাইজেশন: synchronized কীওয়ার্ড রেস কন্ডিশন প্রতিরোধ করে`,
      takeaways: [
        "Polymorphism: Overloading (compile-time), Overriding (run-time)",
        "Abstract Classes: Cannot instantiate, contain abstract methods",
        "Exceptions: try-catch-finally for error handling",
        "Generics: Type-safe generic methods and classes (Box<T>)",
        "Multi-threading: Extend Thread or implement Runnable",
        "Synchronization: synchronized prevents race conditions"
      ],
      takeawaysBn: [
        "পলিমর্ফিজম: ওভারলোডিং (কম্পাইল-টাইম), ওভাররাইডিং (রান-টাইম)",
        "অ্যাবস্ট্রাক্ট ক্লাস: ইনস্ট্যান্টিয়েট করা যায় না, অ্যাবস্ট্রাক্ট মেথড থাকে",
        "এক্সসেপশন: try-catch-finally এরর হ্যান্ডলিংয়ের জন্য",
        "জেনেরিক্স: টাইপ-নিরাপদ জেনেরিক মেথড ও ক্লাস (Box<T>)",
        "মাল্টি-থ্রেডিং: থ্রেড ক্লাস এক্সটেন্ড বা রানেবল ইমপ্লিমেন্ট",
        "সিনক্রোনাইজেশন: synchronized রেস কন্ডিশন প্রতিরোধ করে"
      ],
      level: "Advanced"
    }
  ]
}

export const module11 = m11