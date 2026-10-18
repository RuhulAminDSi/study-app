# DES Feistel requirements, rational agent definition, and agent–environment model

- **Source image:** `17_des-feistel-and-rational-agent.jpg` (original file name `494989712_9680213422094222_1030138558147341709_n.jpg`)
- **Page:** 17 of 38 (folder-wide position, i.e. 1-19 here) — printed page number on the scan: **19**
- **Paper / Post:** not shown (no paper banner is printed on this page)
- **Exam date:** not shown
- **Marks:** not shown

## Transcription Notes

- No paper banner is printed on this page, so paper/post/date are recorded as "not shown".
- **The page begins mid-answer:** the opening paragraph and its three bullets are the tail of the answer to question 6 ("The high level method of DES…"), which begins on printed page 18 of the original document. Reproduced verbatim as a continuation block.
- **Figure transcribed as text.** The classic agent–environment diagram has been re-rendered as an ASCII flow diagram inside a code block so that every printed label is preserved: State, How the world evolves, What my actions do, Goals, Sensors, What the world is like now, What it will be like if I do action A, What action I should do now, Actuators, Percepts, Actions, Agent, Environment.
- The question heading for question 7 is reproduced with its original trailing ellipsis: "An artificial intelligence is an agent is an entity that continuously revises its enviorment….." — the printed wording (including "is an agent is an entity" and the spelling "enviorment") is preserved verbatim.
- The bulleted agent properties list at the bottom of the page ends after **Autonomous** — the list continues onto printed page 20 of the original document. Marked as continuing.
- Marks are not printed anywhere in this compilation.
- No handwritten marginalia visible.

## Content

### (Continuation of the answer to question 6, "The high level method of DES…")

Since DES is based on the Feistel Cipher, all that is required to specify DES is –

- Round function
- Key schedule
- Any additional processing-Initial and final permutation

**7. An artificial intelligence is an agent is an entity that continuously revises its enviorment…..**

**Answer:** Artificial intelligence is defined as the study of rational agents. A rational agent could be anything that makes decisions, as a person, firm, machine, or software. It carries out an action with the best outcome after considering past and current percepts (agent's perceptual inputs at a given instance). An AI system is composed of an agent and its environment. The agents act in their environment. The environment may contain other agents.

An agent is anything that can be viewed as:

- perceiving its environment through sensors and
- acting upon that environment through actuators

**Goal-based agents:** These kinds of agents take decisions based on how far they are currently from their goal(description of desirable situations). Their every action is intended to reduce its distance from the goal. This allows the agent a way to choose among multiple possibilities, selecting the one which reaches a goal state. The knowledge that supports its decisions is represented explicitly and can be modified, which makes these agents more flexible. They usually require search and planning. The goal-based agent's behavior can easily be changed.

```
┌──────────────────────────────── Agent ────────────────────────────────┐        ┌─────────────┐
│                                                                          │        │             │
│   ┌───────────┐                                                          │        │             │
│   │   State   │───────────────┐                                          │        │             │
│   └───────────┘               │                                          │        │             │
│                               │                                          │  Percepts│             │
│ ┌───────────────────────┐     ├──────────────►  ┌─────────────────────┐  │ ◄──────│             │
│ │ How the world evolves │─────┤                 │ What the world      │──┼───────►│             │
│ └───────────────────────┘     │   ┌─────────┐  │ is like now         │  │ Sensors│ Environment│
│                               │   │ Sensors │  └──────────┬──────────┘  │        │             │
│ ┌───────────────────────┐     │   └─────────┘             │             │        │             │
│ │ What my actions do    │─────┴──────────────┐             ▼             │        │             │
│ └───────────────────────┘                    │  ┌──────────────────────┐  │        │             │
│                                              └─►│ What it will be like │  │        │             │
│                                                 │ if I do action A     │  │        │             │
│                                                 └──────────┬───────────┘  │        │             │
│                                                            ▼              │        │             │
│ ┌───────────┐                              ┌──────────────────────────┐   │        │             │
│ │   Goals   │────────────────────────────► │ What action I should     │   │        │             │
│ └───────────┘                              │ do now                   │   │        │             │
│                                             └────────────┬─────────────┘   │        │             │
│   Actuators ──────────────────────────────────────────────┼───────────────►│ Actions│             │
└──────────────────────────────────────────────────────────┴──────────────────┘        └─────────────┘
```

Agents in Artificial Intelligence contain the following properties:

- **Environment:** The agent is situated in a given environment.
- **Autonomus:** The agent can operate without direct human intervention or other software methods. It controls its activities and internal environment. The agent independently which steps it will take in its current condition to achieve the best improvements. The agent achieves autonomy if its performance is measured by its experiences in the context of learning and adapting.

[the bulleted list of agent properties continues on the following page of the original document]
