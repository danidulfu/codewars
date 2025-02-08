Mr. Wright & Mr. Wong: A Parody Challenge

Introduction
Inspired by the legendary "Mr. Right & Mr. Wrong" series, this parody introduces two characters, Mr. Wright and Mr. Wong, who refuse to speak directly to each other. Instead, they use you as their trusted intermediary.

These two have a flair for dramatic and varied ways of phrasing their messages! They might say:

Tell him: "I'm tired of this."
Let him know that: "I NEED A BREAK!"
"Why are you always like this?", tell him this, will ya?
Tell him: "You are .. uhmm .."
You know, I really can't stand talking to him.
Uhmm .. how should I say this?
Tell him: "Puhmman is coming!!!
...
This challenge will test your ability to mediate while keeping things fun and lighthearted.

The Task
Mr. Wright and Mr. Wong refuse to speak directly. You are their go-between! Given who is talking and their message, your task is to craft and deliver a response - but with a catch: you might respond to the speaker or to the other party. The choice is yours, and it's part of the puzzle!

Input:

source: The name of the speaker (which could be either Mr. Wright or Mr. Wong)
message: The message they dictate (string)
Output:

Return a tuple:
the name of the person you're addresing (which could be either Mr. Wright or Mr. Wong)
your message (string)
Depending on the programming language, tuple might be represented by array, vector, or any other equivalent data structure.

Contraints:

You will be provided messages that contain only alphanumeric characters, whitespace and punctuation.
Both men only accept correctly redirected messages or any of the predefined messages.
The Puzzle
Your primary task is to mediate messages between Mr. Wright and Mr. Wong, deciding when to forward messages and to whom.
As an additional challenge, you must also deduce when to use predefined messages for certain situations. This is a crucial aspect of being an effective mediator.
Available predefined messages:
I'm having trouble understanding you when you shout. Could you please say it again more calmly?
I'm here to help if you have a message you'd like to send.
I appreciate you sharing that. Now, is there a message related to that you want me to pass on?
The puzzle lies in uncovering the hidden logic that governs both the main task and the use of predefined messages.
Hints
Here are some clues to help you uncover the hidden logic:

A person can shout, but never directly to you.
A person can hesitate to speak, both to you and to the other person.
A person who hesitates never shouts.
Don't overthink when someone is hesitating. They always use a specific word somewhere in the message.
Detecting whether some one is shouting shouldn't be too hard either. Volume matters, but only when it's consistent throughout. Only shouting through parts of a message, is considered normal speech.
Examples
Here are some example inputs and expected outputs to help clarify how the challenge works. These examples demonstrate various scenarios you'll need to handle, including normal message forwarding, shouting, hesitation, and personal comments. Your solution should be able to correctly process these and similar inputs.

Normal message forwarding:

#Input:
  source = 'Mr. Wright'
  message = 'Tell him: "I\'m tired of this.".'

#Expected Output:
  ('Mr. Wong', 'Mr. Wright says: "I\'m tired of this.".')
Handling shouting:

#Input:
  source = 'Mr. Wong'
  message = 'Let him know that: "I NEED A BREAK!".'

#Expected Output:
  ('Mr. Wong', 'I\'m having trouble understanding you when you shout. Could you please say it again more calmly?')
Alternative message format:

#Input:
  source = 'Mr. Wright'
  message = '"Why are you always like this?", tell him this, will ya?'

#Expected Output:
  ('Mr. Wong', 'Mr. Wright says: "Why are you always like this?".')
Handling hesitation in message to other person:

#Input:
  source = 'Mr. Wong'
  message = 'Tell him: "Uhmm .."'

#Expected Output:
  ('Mr. Wong', 'I\'m here to help if you have a message you\'d like to send.')
Responding to personal comments:

#Input:
  source = 'Mr. Wright'
  message = 'You know, I really can\'t stand talking to him.'

#Expected Output:
  ('Mr. Wright', 'I appreciate you sharing that. Now, is there a message related to that you want me to pass on?')
Handling hesitation in message to you:

#Input:
  source = 'Mr. Wong'
  message = 'Uhmm .. how should I say this?'

#Expected Output:
  ('Mr. Wong', 'I\'m here to help if you have a message you\'d like to send.')
Tricky message:

#Input:
  source = 'Mr. Wright'
  message = 'Tell him: "Puhmman is coming!!!".

#Expected Output:
  ('Mr. Wong', 'Mr. Wright says: "Puhmman is coming!!!".')
Good luck, have fun, diplomatic mediator!