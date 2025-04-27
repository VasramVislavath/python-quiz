/// Quiz Data
const quizData = {
"Basics and Fundamentals": [
            {
                question: "Which symbol is used to indicate a block of code in Python?",
                options: ["Curly braces {}", "Indentation", "Square brackets []", "Parentheses ()"],
                answer: "Indentation",
                hint: "Python doesn't use braces for blocks like other languages.",
                explanation: "Python uses indentation (whitespace) to define code blocks instead of curly braces."
            },
            {
                question: "What character is used to start a single-line comment in Python?",
                options: ["//", "#", "--", "/*"],
                answer: "#",
                hint: "It's the same symbol used for 'hashtag' in social media.",
                explanation: "The # symbol is used for single-line comments in Python."
            },
       
            {
                question: "What is the type of x = 3.14?",
                options: ["int", "float", "str", "bool"],
                answer: "float",
                hint: "Look at the decimal point.",
                explanation: "Numbers with decimal points are float type in Python."
            },
            {
                question: "Which is NOT a valid variable name?",
                options: ["my_var", "_var", "2var", "var2"],
                answer: "2var",
                hint: "Variable names can't start with numbers.",
                explanation: "Python variables must start with a letter or underscore."
            },
            {
                question: "What does 5 ** 3 evaluate to?",
                options: ["15", "125", "8", "Error"],
                answer: "125",
                hint: "This is the exponentiation operator.",
                explanation: "** is the exponent operator (5 cubed is 125)."
            },
            {
                question: "What does 10 // 3 return?",
                options: ["3", "3.333", "1", "4"],
                answer: "3",
                hint: "This performs floor division.",
                explanation: "// returns the quotient as an integer, discarding the remainder."
            },
            {
                question: "How do you get user input in Python?",
                options: ["scanf()", "input()", "get_input()", "read()"],
                answer: "input()",
                hint: "The function name describes what it does.",
                explanation: "input() pauses execution and waits for keyboard input."
            },
            {
                question: "What does print('Hello', 'World', sep='-') output?",
                options: ["Hello World", "Hello-World", "Hello,World", "Error"],
                answer: "Hello-World",
                hint: "sep controls the separator between arguments.",
                explanation: "The sep parameter replaces the default space separator."
            },
            {
                question: "How do you write a multi-line comment?",
                options: ["Using multiple # lines", "/* comment */", "''' comment '''", "// comment"],
                answer: "''' comment '''",
                hint: "Python doesn't use /* */ like some languages.",
                explanation: "Triple quotes (single or double) create multi-line strings often used as comments."
            },
            {
                question: "What does int('10') + 5 produce?",
                options: ["'105'", "15", "Error", "10 5"],
                answer: "15",
                hint: "int() converts strings to integers.",
                explanation: "The string '10' is converted to integer 10 before addition."
            },
            {
                question: "What does str(3.14)[0] return?",
                options: ["3", ".", "1", "4"],
                answer: "3",
                hint: "Indexing starts at 0.",
                explanation: "str(3.14) becomes '3.14', and index 0 is '3'."
            },
            {
                question: "What is 'Hello' + 'World'?",
                options: ["HelloWorld", "Hello World", "Error", "'Hello'+'World'"],
                answer: "HelloWorld",
                hint: "The + operator concatenates strings.",
                explanation: "Strings are concatenated without space unless explicitly added."
            },
            {
                question: "What does 'Python'[1:4] return?",
                options: ["Pyt", "yth", "thon", "ytho"],
                answer: "yth",
                hint: "Slicing is start-inclusive, end-exclusive.",
                explanation: "Index 1 is 'y', index 4 is 'o' (but not included)."
            },
            {
                question: "Which is mutable?",
                options: ["tuple", "list", "str", "None"],
                answer: "list",
                hint: "Mutable means changeable after creation.",
                explanation: "Lists can be modified after creation, unlike tuples/strings."
            },
            {
                question: "How do you create an empty dictionary?",
                options: ["{}", "dict()", "Both A and B", "[]"],
                answer: "Both A and B",
                hint: "There are multiple correct ways.",
                explanation: "Both {} and dict() create empty dictionaries."
            },
            {
                question: "What does {1, 2, 3} create?",
                options: ["list", "tuple", "set", "dict"],
                answer: "set",
                hint: "Notice the curly braces without key-value pairs.",
                explanation: "Curly braces with values only (no colons) create sets."
            }
        ],
"Control Flow Loops":[
            {
                question: "Which symbol is used to indicate a block of code in Python?",
                options: ["Curly braces {}", "Indentation", "Square brackets []", "Parentheses ()"],
                answer: "Indentation",
                hint: "Python doesn't use braces for blocks like other languages.",
                explanation: "Python uses indentation (whitespace) to define code blocks instead of curly braces."
            },
            {
                question: "What will be the output of: 'print(10 if False else 20)'?",
                options: ["10", "20", "None", "Error"],
                answer: "20",
                hint: "This is a ternary operator example.",
                explanation: "The ternary operator returns the value after 'else' when the condition is False."
            },
            {
                question: "Which loop is best when you know the exact number of iterations?",
                options: ["while loop", "for loop", "nested loop", "infinite loop"],
                answer: "for loop",
                hint: "This loop works well with sequences and known ranges.",
                explanation: "for loops are ideal when you know how many times you need to iterate."
            },
            {
                question: "What does the 'break' statement do in a loop?",
                options: ["Skip current iteration", "Exit the loop entirely", "Pause the loop", "Restart the loop"],
                answer: "Exit the loop entirely",
                hint: "Think of breaking out of something.",
                explanation: "break immediately terminates the loop's execution."
            },
            {
                question: "What will range(3) generate?",
                options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[3]"],
                answer: "[0, 1, 2]",
                hint: "Python ranges start at 0 by default.",
                explanation: "range(3) generates numbers from 0 up to (but not including) 3."
            },
            {
                question: "Which keyword is used to skip the current iteration?",
                options: ["pass", "break", "continue", "skip"],
                answer: "continue",
                hint: "It continues with the next iteration.",
                explanation: "continue jumps to the next iteration of the loop."
            },
            {
                question: "What will 'pass' do in this code: 'if x > 5: pass'?",
                options: ["Throw an error", "Do nothing", "Skip to else", "End the program"],
                answer: "Do nothing",
                hint: "pass is a placeholder.",
                explanation: "pass is a null operation used when syntax requires a statement but you don't want to execute anything."
            },
            {
                question: "How many times will this loop run? 'for i in range(1, 5): ...'",
                options: ["3", "4", "5", "6"],
                answer: "4",
                hint: "Remember range() is exclusive of the stop value.",
                explanation: "range(1, 5) generates numbers 1 through 4 (4 iterations)."
            },
            {
                question: "What's the output of: 'print('Hi') if True else print('Bye')'?",
                options: ["Hi", "Bye", "Hi Bye", "Error"],
                answer: "Hi",
                hint: "Ternary operator executes the true branch.",
                explanation: "Since the condition is True, the first expression is executed."
            },
            {
                question: "Which loop would you use to process items in a list?",
                options: ["while", "for", "do-while", "until"],
                answer: "for",
                hint: "Lists are sequences that can be iterated over.",
                explanation: "for loops are designed for iterating over sequences like lists."
            },
            {
                question: "What's missing in this code? 'while x < 10:'",
                options: ["Parentheses", "Curly braces", "Colon", "Initialization of x"],
                answer: "Initialization of x",
                hint: "The variable must exist before the condition check.",
                explanation: "x needs to be defined before the while loop can evaluate the condition."
            },
            {
                question: "What will this print? 'for i in range(2): print(i, end=' ')'",
                options: ["0 1", "1 2", "0 1 2", "2"],
                answer: "0 1",
                hint: "range(2) starts at 0 and end=' ' prevents newlines.",
                explanation: "range(2) gives 0 and 1, printed on the same line due to end=' '."
            },
            {
                question: "Which statement makes this an infinite loop? 'while True: ...'",
                options: ["The condition", "The colon", "The while keyword", "The indentation"],
                answer: "The condition",
                hint: "The loop continues as long as the condition is true.",
                explanation: "Since True is always true, the loop will run indefinitely."
            },
            {
                question: "What's the purpose of 'else' in a for loop?",
                options: ["Required syntax", "Executes if loop completes normally", "Alternative to break", "Error handling"],
                answer: "Executes if loop completes normally",
                hint: "It's different from if-else.",
                explanation: "The else block in loops executes only if the loop finishes without hitting a break."
            },
            {
                question: "How to write this as a ternary? 'if x > y: z = x else z = y'",
                options: ["z = x > y ? x : y", "z = x if x > y else y", "z = (x > y) then x else y", "z = if x > y then x else y"],
                answer: "z = x if x > y else y",
                hint: "Python's ternary syntax is different from other languages.",
                explanation: "Python uses 'value_if_true if condition else value_if_false' syntax."
            },
            {
                question: "What does range(0, 10, 2) generate?",
                options: ["Even numbers 0-8", "Odd numbers 1-9", "Numbers 0-10", "Every 10th number"],
                answer: "Even numbers 0-8",
                hint: "The third argument is the step value.",
                explanation: "It generates 0, 2, 4, 6, 8 (start at 0, stop before 10, step by 2)."
            },
            {
                question: "Which is NOT a loop control statement?",
                options: ["break", "continue", "pass", "return"],
                answer: "return",
                hint: "return is used in functions.",
                explanation: "return exits a function, not specifically a loop."
            },
            {
                question: "What's wrong here? 'for i in 5: print(i)'",
                options: ["Missing range()", "No colon", "Wrong indentation", "Nothing"],
                answer: "Missing range()",
                hint: "You can't directly iterate over an integer.",
                explanation: "Need range(5) or some iterable, can't loop over a single number."
            },
            {
                question: "What's the output? 'x = 5\nwhile x > 0:\n    print(x)\n    x -= 1\nelse:\n    print('Done')'",
                options: ["5 4 3 2 1", "5 4 3 2 1 Done", "4 3 2 1 0 Done", "Infinite loop"],
                answer: "5 4 3 2 1 Done",
                hint: "The else clause executes after normal loop completion.",
                explanation: "Prints numbers 5 down to 1, then 'Done' from the else block."
            },
            {
                question: "Which is equivalent to: 'if not x > 5:'?",
                options: ["if x < 5:", "if x <= 5:", "if x != 5:", "if x == 5:"],
                answer: "if x <= 5:",
                hint: "De Morgan's laws help with condition negation.",
                explanation: "not x > 5 is the same as x <= 5."
            }
        ],
        "Functions & Modules" : [
            {
                question: "Which keyword is used to define a function in Python?",
                options: ["func", "def", "function", "define"],
                answer: "def",
                hint: "It's a three-letter keyword.",
                explanation: "Python uses 'def' to declare functions (e.g., def my_function():)."
            },
            {
                question: "What will be printed by: 'print(lambda x: x**2)(5))'?",
                options: ["25", "10", "Error", "None"],
                answer: "25",
                hint: "Lambda functions are anonymous one-line functions.",
                explanation: "This lambda squares its input, so 5² = 25."
            },
            {
                question: "How do you make a parameter optional with a default value?",
                options: ["param=value", "param:value", "default param=value", "param value"],
                answer: "param=value",
                hint: "The syntax resembles variable assignment.",
                explanation: "Function parameters can have defaults like: def greet(name='Guest')."
            },
            {
                question: "What does *args capture in a function definition?",
                options: ["Keyword arguments", "Positional arguments as a tuple", "Global variables", "Return values"],
                answer: "Positional arguments as a tuple",
                hint: "The asterisk (*) is important.",
                explanation: "*args collects extra positional arguments into a tuple."
            },
            {
                question: "Which import statement is correct to use sqrt() directly?",
                options: ["import math.sqrt", "from math import sqrt", "import sqrt from math", "include math.sqrt"],
                answer: "from math import sqrt",
                hint: "It uses 'from ... import' syntax.",
                explanation: "This imports only sqrt() from the math module for direct use."
            },
            {
                question: "What will __name__ contain when a script runs directly?",
                options: ["__main__", "__script__", "None", "The filename"],
                answer: "__main__",
                hint: "Think about the main entry point.",
                explanation: "__name__ is '__main__' when a script is executed directly (not imported)."
            },
            {
                question: "How to access a global variable inside a function?",
                options: ["Using the 'global' keyword", "It's automatic", "With 'nonlocal'", "Via globals()"],
                answer: "Using the 'global' keyword",
                hint: "Modifying globals requires explicit declaration.",
                explanation: "The 'global' keyword allows modifying global variables inside functions."
            },
            {
                question: "What does **kwargs capture in a function?",
                options: ["Positional arguments", "Keyword arguments as a dictionary", "Return values", "Module names"],
                answer: "Keyword arguments as a dictionary",
                hint: "Double asterisk (**) handles key-value pairs.",
                explanation: "**kwargs collects extra keyword arguments into a dictionary."
            },
            {
                question: "Which statement immediately exits a function?",
                options: ["break", "exit", "return", "pass"],
                answer: "return",
                hint: "It can also send back a value.",
                explanation: "return exits the function and optionally returns a value."
            },
            {
                question: "What is the scope of variables defined inside a function?",
                options: ["Global", "Local", "Module-level", "Universal"],
                answer: "Local",
                hint: "Think about where the variable is visible.",
                explanation: "Function variables are local by default—only accessible within the function."
            },
            {
                question: "How would you call a function with arguments (a=1, b=2)?",
                options: ["func(1, 2)", "func(a=1, b=2)", "func(1; 2)", "func(*1, **2)"],
                answer: "func(a=1, b=2)",
                hint: "Keyword arguments use names explicitly.",
                explanation: "Keyword arguments specify parameter names during the call."
            },
            {
                question: "What does 'nonlocal' do?",
                options: ["Accesses global variables", "Modifies enclosing function's variables", "Imports modules", "Skips iterations"],
                answer: "Modifies enclosing function's variables",
                hint: "Used in nested functions.",
                explanation: "nonlocal allows modifying variables from outer (but non-global) scopes."
            },
            {
                question: "What is the output of: 'print(type(lambda x: x+1))'?",
                options: ["<class 'function'>", "<class 'lambda'>", "<class 'int'>", "Error"],
                answer: "<class 'function'>",
                hint: "Lambdas are functions under the hood.",
                explanation: "Lambda functions are regular function objects in Python."
            },
            {
                question: "Which imports all names from a module directly?",
                options: ["import module", "from module import *", "include module", "using module"],
                answer: "from module import *",
                hint: "Wildcard imports are generally discouraged.",
                explanation: "This imports all names (except those starting with _) into the current namespace."
            },
            {
                question: "What happens if a function has no return statement?",
                options: ["Returns None", "Returns 0", "Raises an error", "Returns True"],
                answer: "Returns None",
                hint: "Python functions always return something.",
                explanation: "Without an explicit return, functions implicitly return None."
            },
            {
                question: "How to pass a list [1,2,3] as positional arguments?",
                options: ["func(list)", "func(*list)", "func(&list)", "func(list=)"],
                answer: "func(*list)",
                hint: "Unpacking operator (*) expands iterables.",
                explanation: "The asterisk (*) unpacks the list into positional arguments."
            },
            {
                question: "When is 'if __name__ == '__main__':' used?",
                options: ["To define main()", "For module testing", "To make a script importable", "All of the above"],
                answer: "All of the above",
                hint: "It checks execution context.",
                explanation: "This idiom lets code run when executed directly but not when imported."
            },
            {
                question: "What does this return? 'def f(): pass'",
                options: ["None", "pass", "Error", "0"],
                answer: "None",
                hint: "Empty functions still return a value.",
                explanation: "The pass statement does nothing, but the function still returns None."
            },
            {
                question: "Which is NOT a valid function parameter type?",
                options: ["Positional", "Keyword", "Default", "Static"],
                answer: "Static",
                hint: "Python doesn't have static parameters like some languages.",
                explanation: "Python supports positional, keyword, default, *args, and **kwargs parameters."
            },
            {
                question: "What's the output of: 'print((lambda x, y: x+y)(2,3))'?",
                options: ["5", "23", "Error", "None"],
                answer: "5",
                hint: "Lambdas can take multiple arguments.",
                explanation: "This lambda adds two numbers: 2 + 3 = 5."
            }
        ],
        "Data Structures" : [
            {
                question: "Which method adds an element to the end of a list?",
                options: ["insert()", "add()", "append()", "push()"],
                answer: "append()",
                hint: "Think of 'appending' to a document.",
                explanation: "list.append(x) adds x to the end of the list."
            },
            {
                question: "What makes tuples different from lists?",
                options: ["Tuples are mutable", "Tuples use square brackets", "Tuples are immutable", "Tuples can't be indexed"],
                answer: "Tuples are immutable",
                hint: "Think about whether they can be changed after creation.",
                explanation: "Tuples cannot be modified after creation (immutable), while lists can (mutable)."
            },
            {
                question: "How do you create an empty set?",
                options: ["{}", "[]", "set()", "()"],
                answer: "set()",
                hint: "Empty curly braces {} create something else.",
                explanation: "{} creates an empty dictionary. For sets, use set()."
            },
            {
                question: "What will {'a': 1, 'b': 2}.keys() return?",
                options: ["['a', 'b']", "['a', 1, 'b', 2]", "dict_keys(['a', 'b'])", "('a', 'b')"],
                answer: "dict_keys(['a', 'b'])",
                hint: "In Python 3, dictionary methods return view objects.",
                explanation: "dict.keys() returns a view object showing the keys."
            },
            {
                question: "Which string method formats variables using {} placeholders?",
                options: ["f-string", "format()", "interpolate()", "replace()"],
                answer: "format()",
                hint: "This was the primary method before f-strings.",
                explanation: "str.format() replaces {} placeholders with variables."
            },
            {
                question: "What does [1, 2, 3][::-1] return?",
                options: ["[1, 2, 3]", "[3, 2, 1]", "[1, 3]", "Error"],
                answer: "[3, 2, 1]",
                hint: "Slicing with [start:stop:step] where step is -1.",
                explanation: "This slice reverses the list by stepping backward."
            },
            {
                question: "Which collection counts hashable objects automatically?",
                options: ["defaultdict", "namedtuple", "Counter", "deque"],
                answer: "Counter",
                hint: "Think of counting occurrences.",
                explanation: "collections.Counter counts elements automatically."
            },
            {
                question: "How do you access a value in a dictionary?",
                options: ["dict.value(key)", "dict[key]", "dict.get(key)", "Both B and C"],
                answer: "Both B and C",
                hint: "There are multiple correct ways.",
                explanation: "Both dict[key] and dict.get(key) work, with get() being safer for missing keys."
            },
            {
                question: "What's the output of: set([1,1,2,3])?",
                options: ["[1,2,3]", "{1,2,3}", "[1,1,2,3]", "Error"],
                answer: "{1,2,3}",
                hint: "Sets remove duplicates.",
                explanation: "Sets automatically remove duplicate values."
            },
            {
                question: "Which operation combines two sets keeping only common elements?",
                options: ["union()", "intersection()", "difference()", "update()"],
                answer: "intersection()",
                hint: "Think of where two sets overlap.",
                explanation: "intersection() returns elements present in both sets."
            },
            {
                question: "What does namedtuple provide that regular tuples don't?",
                options: ["Mutability", "Named fields", "Higher performance", "Smaller memory usage"],
                answer: "Named fields",
                hint: "The name gives it away.",
                explanation: "namedtuple allows accessing fields by name (e.g., point.x) instead of just index."
            },
            {
                question: "Which list method removes and returns the last item?",
                options: ["remove()", "pop()", "delete()", "cut()"],
                answer: "pop()",
                hint: "It 'pops' the item off the end.",
                explanation: "list.pop() removes and returns the last item by default."
            },
            {
                question: "What's the purpose of defaultdict?",
                options: ["Count elements", "Provide default values for missing keys", "Create tuples with names", "Make dictionaries ordered"],
                answer: "Provide default values for missing keys",
                hint: "It handles KeyError cases automatically.",
                explanation: "defaultdict automatically creates default values for missing keys."
            },
            {
                question: "Which string method checks if all characters are alphabetic?",
                options: ["isalpha()", "isalnum()", "isdigit()", "isletter()"],
                answer: "isalpha()",
                hint: "Think 'alpha' as in alphabet.",
                explanation: "str.isalpha() returns True if all characters are letters."
            },
            {
                question: "How would you combine two lists [1,2] and [3,4] into [1,2,3,4]?",
                options: ["[1,2] + [3,4]", "[1,2].append([3,4])", "[1,2].add([3,4])", "[1,2].extend([3,4])"],
                answer: "[1,2] + [3,4]",
                hint: "The + operator works with lists.",
                explanation: "The + operator concatenates lists (extend() also works but modifies in-place)."
            },
            {
                question: "What does deque provide over regular lists?",
                options: ["Faster appends/pops from both ends", "Automatic sorting", "Key-value pairs", "Immutable operations"],
                answer: "Faster appends/pops from both ends",
                hint: "It's short for 'double-ended queue'.",
                explanation: "collections.deque is optimized for O(1) operations at both ends."
            },
            {
                question: "Which creates a dictionary with keys 'a' and 'b' set to 0?",
                options: ["{'a':0, 'b':0}", "dict(a=0, b=0)", "dict.fromkeys(['a','b'], 0)", "All of the above"],
                answer: "All of the above",
                hint: "Python has multiple dictionary creation methods.",
                explanation: "All three syntaxes create the same dictionary."
            },
            {
                question: "What will 'Hello {name}'.format(name='World') return?",
                options: ["Hello World", "Hello name", "Error", "Hello {name}"],
                answer: "Hello World",
                hint: "String formatting replaces placeholders.",
                explanation: "The format() method substitutes {name} with the provided value."
            },
            {
                question: "Which is NOT a valid dictionary key?",
                options: ["'string'", "42", "[1,2,3]", "(1,2)"],
                answer: "[1,2,3]",
                hint: "Dictionary keys must be hashable.",
                explanation: "Lists are mutable and cannot be dictionary keys (tuples can)."
            },
            {
                question: "What's the output of: ' '.join(['Python', 'Rocks'])?",
                options: ["PythonRocks", "Python Rocks", "['Python', 'Rocks']", "Error"],
                answer: "Python Rocks",
                hint: "join() combines strings with the separator.",
                explanation: "The space ' ' is used to join the list elements."
            }
        ],
        "Object-Oriented Programming (OOP)" : [
            {
                question: "Which keyword is used to define a class in Python?",
                options: ["object", "class", "def", "struct"],
                answer: "class",
                hint: "It's the same keyword used in many other languages.",
                explanation: "The 'class' keyword is used to define a new class in Python."
            },
            {
                question: "What is the purpose of the __init__ method?",
                options: [
                    "To initialize the class definition",
                    "To create class documentation",
                    "To initialize new object instances",
                    "To destroy the object"
                ],
                answer: "To initialize new object instances",
                hint: "It's called automatically when creating new objects.",
                explanation: "__init__ is the constructor method that gets called when a new instance is created."
            },
            {
                question: "What does 'self' represent in a class method?",
                options: [
                    "The class itself",
                    "The current object instance",
                    "The parent class",
                    "A reference to static methods"
                ],
                answer: "The current object instance",
                hint: "It's the first parameter in instance methods.",
                explanation: "'self' refers to the instance of the class and is used to access its attributes and methods."
            },
            {
                question: "How do you call a parent class's method from a child class?",
                options: [
                    "parent.method()",
                    "super().method()",
                    "self.parent.method()",
                    "class.parent.method()"
                ],
                answer: "super().method()",
                hint: "Python has a built-in function for this purpose.",
                explanation: "super() returns a temporary object of the superclass, allowing you to call its methods."
            },
            {
                question: "How is name mangling used for private attributes in Python?",
                options: [
                    "Single underscore prefix (_var)",
                    "Double underscore prefix (__var)",
                    "No underscore but 'private' keyword",
                    "Triple underscore prefix (___var)"
                ],
                answer: "Double underscore prefix (__var)",
                hint: "It's not truly private but name-mangled.",
                explanation: "Names with double underscore prefix get rewritten to _ClassName__var to avoid naming conflicts."
            },
            {
                question: "Which magic method is called by the str() function?",
                options: ["__str__", "__repr__", "__string__", "__format__"],
                answer: "__str__",
                hint: "Think of the 'string representation' of an object.",
                explanation: "__str__ provides the informal string representation used by str() and print()."
            },
            {
                question: "What's the difference between @staticmethod and @classmethod?",
                options: [
                    "classmethod takes cls parameter, staticmethod takes nothing",
                    "staticmethod takes cls parameter, classmethod takes nothing",
                    "No difference, they're interchangeable",
                    "staticmethod can't access any class attributes"
                ],
                answer: "classmethod takes cls parameter, staticmethod takes nothing",
                hint: "One receives the class reference, the other doesn't.",
                explanation: "classmethod receives the class as first argument (cls), while staticmethod doesn't receive any special first argument."
            },
            {
                question: "What does the @property decorator do?",
                options: [
                    "Makes a method callable without parentheses",
                    "Converts a method to a class method",
                    "Turns a method into a getter for a property",
                    "Makes an attribute read-only"
                ],
                answer: "Turns a method into a getter for a property",
                hint: "It's part of Python's property system.",
                explanation: "@property allows you to define getter methods that are accessed like attributes."
            },
            {
                question: "Which magic method is used for operator overloading of +?",
                options: ["__plus__", "__add__", "__sum__", "__operator__"],
                answer: "__add__",
                hint: "Think of 'add'ition.",
                explanation: "The __add__ method is called when the + operator is used on objects."
            },
            {
                question: "What is method overriding in inheritance?",
                options: [
                    "Changing a method's parameters",
                    "Replacing a parent class method with a new implementation",
                    "Making a method private",
                    "Converting a method to a property"
                ],
                answer: "Replacing a parent class method with a new implementation",
                hint: "It's about providing new behavior in child classes.",
                explanation: "Method overriding means providing a different implementation of a method in a child class that already exists in the parent."
            },
            {
                question: "Which magic method is called when an object is deleted?",
                options: ["__del__", "__destroy__", "__cleanup__", "__exit__"],
                answer: "__del__",
                hint: "Think of 'del' keyword.",
                explanation: "__del__ is the destructor method called when an object is about to be destroyed."
            },
            {
                question: "What is the purpose of polymorphism in OOP?",
                options: [
                    "To hide implementation details",
                    "To allow objects of different types to be treated similarly",
                    "To prevent method overriding",
                    "To create private methods"
                ],
                answer: "To allow objects of different types to be treated similarly",
                hint: "Think 'many forms'.",
                explanation: "Polymorphism enables using a unified interface for objects of different classes."
            },
            {
                question: "How do you make a method that works on the class instead of instances?",
                options: [
                    "Use the @classmethod decorator",
                    "Define it outside the class",
                    "Make it a static method",
                    "Both A and C"
                ],
                answer: "Both A and C",
                hint: "There are two ways to create class-level methods.",
                explanation: "Both @classmethod and @staticmethod create methods that work on the class level rather than instance level."
            },
            {
                question: "What is encapsulation in OOP?",
                options: [
                    "Hiding implementation details",
                    "Combining data and methods into a single unit",
                    "Both A and B",
                    "Creating multiple class instances"
                ],
                answer: "Both A and B",
                hint: "It's about bundling and controlling access.",
                explanation: "Encapsulation combines data and methods into a class while controlling access to the internals."
            },
            {
                question: "Which magic method provides the official string representation?",
                options: ["__str__", "__repr__", "__info__", "__display__"],
                answer: "__repr__",
                hint: "Used by the repr() function.",
                explanation: "__repr__ provides the official string representation that should ideally be valid Python code."
            },
            {
                question: "What does the __call__ method enable?",
                options: [
                    "Making instances callable like functions",
                    "Calling superclass methods",
                    "Automatic instance creation",
                    "Method chaining"
                ],
                answer: "Making instances callable like functions",
                hint: "Think of calling an object like obj().",
                explanation: "__call__ allows class instances to be called like functions."
            },
            {
                question: "How would you create a read-only property?",
                options: [
                    "Only define a getter with @property",
                    "Use @readonly decorator",
                    "Make the attribute private",
                    "Use final keyword"
                ],
                answer: "Only define a getter with @property",
                hint: "Without setter, it's read-only.",
                explanation: "A property with only a getter (defined by @property) becomes read-only."
            },
            {
                question: "What's the purpose of the __slots__ attribute?",
                options: [
                    "To declare class attributes",
                    "To optimize memory by preventing dynamic attribute creation",
                    "To make a class abstract",
                    "To enable multiple inheritance"
                ],
                answer: "To optimize memory by preventing dynamic attribute creation",
                hint: "It's a performance optimization.",
                explanation: "__slots__ reduces memory usage by preventing the creation of __dict__ for instances."
            },
            {
                question: "Which decorator would you use to create an alternative constructor?",
                options: ["@property", "@classmethod", "@staticmethod", "@constructor"],
                answer: "@classmethod",
                hint: "It needs access to the class object.",
                explanation: "Classmethods are often used to create alternative constructors since they receive the class as first argument."
            },
            {
                question: "What does isinstance() check?",
                options: [
                    "If an object is an instance of a class",
                    "If a class inherits from another",
                    "If an attribute exists",
                    "If a method is callable"
                ],
                answer: "If an object is an instance of a class",
                hint: "The name suggests its purpose.",
                explanation: "isinstance(obj, Class) returns True if obj is an instance of Class or its subclass."
            }
        ],
        "error-Handling" : [
            {
                question: "Which block is used to handle exceptions in Python?",
                options: ["try", "catch", "handle", "exception"],
                answer: "try",
                hint: "It's the first part of the exception handling structure.",
                explanation: "The 'try' block contains code that might raise an exception."
            },
            {
                question: "What is the purpose of the 'finally' clause?",
                options: [
                    "To handle specific exceptions",
                    "To execute code only if no exceptions occur",
                    "To execute code regardless of whether an exception occurred",
                    "To raise a new exception"
                ],
                answer: "To execute code regardless of whether an exception occurred",
                hint: "Think of cleanup actions that should always run.",
                explanation: "The 'finally' block always executes, making it ideal for cleanup operations."
            },
            {
                question: "How do you manually raise an exception in Python?",
                options: ["throw", "raise", "except", "assert"],
                answer: "raise",
                hint: "It's a single keyword in Python.",
                explanation: "The 'raise' keyword is used to throw an exception explicitly."
            },
            {
                question: "What does the 'else' clause do in a try-except block?",
                options: [
                    "Handles any uncaught exceptions",
                    "Executes when no exceptions occur in the try block",
                    "Always executes after try and except",
                    "Defines alternative exception handling"
                ],
                answer: "Executes when no exceptions occur in the try block",
                hint: "It's the happy path scenario.",
                explanation: "The 'else' clause runs only if the 'try' block completes without raising any exceptions."
            },
            {
                question: "How do you create a custom exception in Python?",
                options: [
                    "By extending the Exception class",
                    "Using the @exception decorator",
                    "By creating any class with 'Error' in its name",
                    "Using the new_exception() function"
                ],
                answer: "By extending the Exception class",
                hint: "Custom exceptions should inherit from the exception hierarchy.",
                explanation: "Custom exceptions are created by subclassing Exception or its subclasses."
            },
            {
                question: "What happens when an 'assert' statement fails?",
                options: [
                    "Nothing, it's just a comment",
                    "Raises an AssertionError",
                    "Prints a warning message",
                    "Continues execution silently"
                ],
                answer: "Raises an AssertionError",
                hint: "Assertions are for debugging assumptions.",
                explanation: "A failed assert statement raises AssertionError with an optional message."
            },
            {
                question: "Which exception would you catch for file not found errors?",
                options: ["FileError", "IOError", "FileNotFoundError", "OSError"],
                answer: "FileNotFoundError",
                hint: "Python has specific exceptions for common errors.",
                explanation: "FileNotFoundError is raised when a file or directory is requested but doesn't exist."
            },
            {
                question: "What is the base class for all built-in exceptions?",
                options: ["Exception", "BaseException", "Error", "Throwable"],
                answer: "BaseException",
                hint: "It's at the top of the exception hierarchy.",
                explanation: "BaseException is the root class for all built-in exceptions in Python."
            },
            {
                question: "How can you catch multiple exceptions in one except clause?",
                options: [
                    "Separate them with commas",
                    "Use multiple except blocks",
                    "Use the pipe character (|)",
                    "Put them in a list"
                ],
                answer: "Separate them with commas",
                hint: "The syntax resembles a tuple.",
                explanation: "You can write 'except (TypeError, ValueError):' to catch multiple exceptions."
            },
            {
                question: "What does the 'from' keyword do in exception handling?",
                options: [
                    "Imports exception classes",
                    "Specifies where to catch exceptions",
                    "Chains exceptions together",
                    "Defines exception scope"
                ],
                answer: "Chains exceptions together",
                hint: "It's used with 'raise'.",
                explanation: "'raise NewException from OriginalException' preserves the exception chain."
            },
            {
                question: "Which block would you use to clean up resources?",
                options: ["try", "except", "else", "finally"],
                answer: "finally",
                hint: "Think of actions that must always occur.",
                explanation: "The 'finally' block is guaranteed to execute, making it perfect for cleanup."
            },
            {
                question: "What is the purpose of the 'with' statement?",
                options: [
                    "To handle exceptions",
                    "To ensure proper resource management",
                    "To create context managers",
                    "Both B and C"
                ],
                answer: "Both B and C",
                hint: "It's often used with file operations.",
                explanation: "The 'with' statement simplifies resource management by automatically calling __enter__ and __exit__ methods."
            },
            {
                question: "How do you access the error message from an exception?",
                options: [
                    "e.msg",
                    "str(e)",
                    "e.message",
                    "All of the above"
                ],
                answer: "str(e)",
                hint: "Exceptions can be converted to strings.",
                explanation: "The str() function converts exceptions to their string representation (the error message)."
            },
            {
                question: "What does 'except Exception as e:' do?",
                options: [
                    "Catches all exceptions and stores in e",
                    "Catches only Exception class errors",
                    "Creates a new exception",
                    "Raises a new exception"
                ],
                answer: "Catches only Exception class errors",
                hint: "It's more specific than a bare 'except:'.",
                explanation: "This catches exceptions inheriting from Exception (not including SystemExit, KeyboardInterrupt, etc.)"
            },
            {
                question: "When would you use a bare 'except:' clause?",
                options: [
                    "When you want to catch all exceptions",
                    "When you don't care about the exception type",
                    "It's generally discouraged",
                    "All of the above"
                ],
                answer: "All of the above",
                hint: "Bare excepts are considered bad practice.",
                explanation: "Bare excepts catch everything (even system-exiting exceptions) and make debugging harder."
            },
            {
                question: "What does 'assert condition, message' do when condition is False?",
                options: [
                    "Prints the message and continues",
                    "Raises AssertionError with the message",
                    "Logs the message as a warning",
                    "Ignores the message"
                ],
                answer: "Raises AssertionError with the message",
                hint: "Assertions are for debugging invariants.",
                explanation: "When the condition fails, Python raises AssertionError with the specified message."
            },
            {
                question: "How do you create a custom exception with a message?",
                options: [
                    "class MyError(Exception): pass",
                    "class MyError(Exception): def __init__(self, msg): self.msg = msg",
                    "Both A and B",
                    "Using raise CustomError('message')"
                ],
                answer: "Both A and B",
                hint: "Exception classes can be simple or customized.",
                explanation: "Both approaches work - simple subclassing or adding custom initialization."
            },
            {
                question: "What's the difference between 'except:' and 'except Exception:'?",
                options: [
                    "No difference",
                    "The first catches all exceptions, the second only Exception subclasses",
                    "The first is syntax error",
                    "The second catches more exceptions"
                ],
                answer: "The first catches all exceptions, the second only Exception subclasses",
                hint: "Think about KeyboardInterrupt and SystemExit.",
                explanation: "A bare 'except:' catches absolutely everything, while 'except Exception:' misses some system-level exceptions."
            },
            {
                question: "Which exception would occur when dividing by zero?",
                options: ["MathError", "DivideError", "ZeroDivisionError", "ArithmeticError"],
                answer: "ZeroDivisionError",
                hint: "Python has specific exceptions for mathematical errors.",
                explanation: "ZeroDivisionError is raised when attempting to divide by zero."
            },
            {
                question: "What is the purpose of exception chaining?",
                options: [
                    "To handle multiple exceptions at once",
                    "To preserve the original exception context",
                    "To create exception hierarchies",
                    "To speed up exception handling"
                ],
                answer: "To preserve the original exception context",
                hint: "It's about maintaining traceback information.",
                explanation: "Exception chaining shows the full context from original error to final handling."
            }
        ],
        "file-Handling" : [
            {
                question: "Which function is used to open a file in Python?",
                options: ["file()", "open()", "read()", "load()"],
                answer: "open()",
                hint: "It's a built-in function that returns a file object.",
                explanation: "The open() function is used to open a file and returns a file object."
            },
            {
                question: "What is the default mode when opening a file?",
                options: ["'r' (read)", "'w' (write)", "'a' (append)", "'x' (exclusive create)"],
                answer: "'r' (read)",
                hint: "The most common operation with files is reading.",
                explanation: "If no mode is specified, 'r' (read mode) is the default."
            },
            {
                question: "Which method is used to read the entire content of a file?",
                options: ["read()", "readline()", "readlines()", "get()"],
                answer: "read()",
                hint: "It reads until the end of the file.",
                explanation: "file.read() reads the entire content of the file as a single string."
            },
            {
                question: "What does the 'with' statement provide when working with files?",
                options: [
                    "Automatic file closing",
                    "Better performance",
                    "Built-in error handling",
                    "All of the above"
                ],
                answer: "Automatic file closing",
                hint: "It's a context manager feature.",
                explanation: "The 'with' statement ensures the file is properly closed after its suite finishes."
            },
            {
                question: "Which mode would you use to write to a file without overwriting existing content?",
                options: ["'r'", "'w'", "'a'", "'x'"],
                answer: "'a'",
                hint: "Think of 'appending' to a file.",
                explanation: "'a' mode opens the file for appending, writing new data at the end."
            },
            {
                question: "How do you read a CSV file in Python?",
                options: [
                    "Using the pandas library",
                    "Using the csv module",
                    "Using the built-in open() function",
                    "All of the above"
                ],
                answer: "All of the above",
                hint: "There are multiple ways to handle CSV files.",
                explanation: "Python provides several ways to work with CSV files, from basic to advanced."
            },
            {
                question: "Which method writes a list of strings to a file?",
                options: ["write()", "writelines()", "dump()", "puts()"],
                answer: "writelines()",
                hint: "It's the plural form of write.",
                explanation: "file.writelines() writes a sequence of strings to the file."
            },
            {
                question: "What does 'r+' mode allow when opening a file?",
                options: [
                    "Reading only",
                    "Writing only",
                    "Both reading and writing",
                    "Appending only"
                ],
                answer: "Both reading and writing",
                hint: "The '+' indicates additional capabilities.",
                explanation: "'r+' opens the file for both reading and writing."
            },
            {
                question: "Which json module method converts a Python object to a JSON string?",
                options: ["dump()", "dumps()", "to_json()", "encode()"],
                answer: "dumps()",
                hint: "The 's' stands for 'string'.",
                explanation: "json.dumps() serializes a Python object to a JSON formatted string."
            },
            {
                question: "What happens if you open a non-existent file in 'w' mode?",
                options: [
                    "Raises FileNotFoundError",
                    "Creates a new file",
                    "Does nothing",
                    "Depends on the operating system"
                ],
                answer: "Creates a new file",
                hint: "'w' stands for 'write'.",
                explanation: "In 'w' mode, if the file doesn't exist, Python will create it."
            },
            {
                question: "Which method reads a single line from a file?",
                options: ["read()", "readline()", "readlines()", "getline()"],
                answer: "readline()",
                hint: "It's singular (not plural).",
                explanation: "file.readline() reads a single line from the file."
            },
            {
                question: "What does the 'b' flag indicate in file modes?",
                options: [
                    "Backup mode",
                    "Binary mode",
                    "Buffer mode",
                    "Both reading and writing"
                ],
                answer: "Binary mode",
                hint: "It's used for non-text files.",
                explanation: "The 'b' flag opens the file in binary mode for working with non-text files."
            },
            {
                question: "How would you parse a JSON string into a Python object?",
                options: ["json.parse()", "json.loads()", "json.decode()", "json.to_python()"],
                answer: "json.loads()",
                hint: "It's the opposite of dumps().",
                explanation: "json.loads() converts a JSON string to a Python object."
            },
            {
                question: "Which method is used to close a file explicitly?",
                options: ["end()", "close()", "shutdown()", "exit()"],
                answer: "close()",
                hint: "It's a method of the file object.",
                explanation: "file.close() releases the resources associated with the file."
            },
            {
                question: "What is the advantage of using DictReader in the csv module?",
                options: [
                    "Faster performance",
                    "Access columns by name instead of index",
                    "Automatic type conversion",
                    "Built-in error handling"
                ],
                answer: "Access columns by name instead of index",
                hint: "It's in the name - 'Dict'Reader.",
                explanation: "csv.DictReader allows accessing CSV data by column names rather than indices."
            },
            {
                question: "Which mode would raise an error if the file already exists?",
                options: ["'r'", "'w'", "'a'", "'x'"],
                answer: "'x'",
                hint: "Think of 'exclusive' creation.",
                explanation: "'x' mode is for exclusive creation - it fails if the file exists."
            },
            {
                question: "What does json.dump() do differently from json.dumps()?",
                options: [
                    "Nothing, they're identical",
                    "dump() writes to a file, dumps() returns a string",
                    "dump() is faster",
                    "dump() handles more data types"
                ],
                answer: "dump() writes to a file, dumps() returns a string",
                hint: "Look at where the output goes.",
                explanation: "json.dump() writes to a file-like object, while json.dumps() returns a string."
            },
            {
                question: "How do you move the file pointer to a specific position?",
                options: ["move()", "seek()", "position()", "goto()"],
                answer: "seek()",
                hint: "It's similar to the C function.",
                explanation: "file.seek(offset) changes the file's current position."
            },
            {
                question: "What is the purpose of the 'newline' parameter in csv.writer?",
                options: [
                    "To specify line endings",
                    "To add empty lines between rows",
                    "To skip empty lines",
                    "To enable multiline cells"
                ],
                answer: "To specify line endings",
                hint: "It controls how lines are terminated.",
                explanation: "The 'newline' parameter controls how line endings are handled in the output."
            },
            {
                question: "Which method would you use to check if a file exists?",
                options: [
                    "os.file_exists()",
                    "os.path.isfile()",
                    "file.exists()",
                    "pathlib.file_exists()"
                ],
                answer: "os.path.isfile()",
                hint: "It's in the os.path module.",
                explanation: "os.path.isfile(path) returns True if the path is an existing regular file."
            }
        ],
        "advanced-Topics" : [
            {
                question: "What is the primary purpose of a decorator in Python?",
                options: [
                    "To add metadata to functions",
                    "To modify or extend the behavior of functions/methods",
                    "To optimize function performance",
                    "To create function aliases"
                ],
                answer: "To modify or extend the behavior of functions/methods",
                hint: "Think of 'wrapping' functionality around existing functions.",
                explanation: "Decorators provide a way to modify functions without changing their actual code."
            },
            {
                question: "Which keyword is used to create a generator function?",
                options: ["return", "yield", "generate", "iterator"],
                answer: "yield",
                hint: "It 'yields' values one at a time.",
                explanation: "The yield keyword pauses function execution and returns a value, making it a generator."
            },
            {
                question: "What do you call an object that implements __iter__() and __next__()?",
                options: ["Generator", "Decorator", "Iterator", "Closure"],
                answer: "Iterator",
                hint: "It's the core protocol for iteration in Python.",
                explanation: "Iterators must implement these two methods to support iteration."
            },
            {
                question: "What is a closure in Python?",
                options: [
                    "A function object with no free variables",
                    "A nested function that remembers values in its enclosing scope",
                    "A special kind of decorator",
                    "A memory management technique"
                ],
                answer: "A nested function that remembers values in its enclosing scope",
                hint: "Think of 'closing over' variables from an outer scope.",
                explanation: "Closures maintain references to variables from their containing scope even after that scope has finished executing."
            },
            {
                question: "What is the main risk when using recursion?",
                options: [
                    "Slower execution than iteration",
                    "Memory leaks",
                    "Stack overflow for deep recursion",
                    "Difficulty in debugging"
                ],
                answer: "Stack overflow for deep recursion",
                hint: "Think about how function calls are managed in memory.",
                explanation: "Each recursive call adds a stack frame, which can exhaust the call stack for deep recursion."
            },
            {
                question: "What does the id() function return for an object?",
                options: [
                    "Its memory address",
                    "A unique identifier",
                    "Its hash value",
                    "Both A and B"
                ],
                answer: "Both A and B",
                hint: "In CPython, this corresponds to a specific memory characteristic.",
                explanation: "id() returns the object's memory address (in CPython), which serves as its unique identifier."
            },
            {
                question: "What is the GIL (Global Interpreter Lock)?",
                options: [
                    "A threading optimization",
                    "A memory management tool",
                    "A mutex that allows only one thread to execute Python bytecode",
                    "A garbage collection mechanism"
                ],
                answer: "A mutex that allows only one thread to execute Python bytecode",
                hint: "It's a CPython implementation detail affecting threading.",
                explanation: "The GIL prevents multiple native threads from executing Python bytecodes simultaneously."
            },
            {
                question: "Which module would you use for true parallelism in Python?",
                options: ["threading", "asyncio", "multiprocessing", "concurrent"],
                answer: "multiprocessing",
                hint: "Think about bypassing the GIL limitation.",
                explanation: "multiprocessing uses separate processes (each with its own GIL) for true parallelism."
            },
            {
                question: "What does the 'async' keyword indicate?",
                options: [
                    "The function will be executed in a separate thread",
                    "The function is a coroutine",
                    "The function is a generator",
                    "The function is thread-safe"
                ],
                answer: "The function is a coroutine",
                hint: "It's part of Python's async/await syntax.",
                explanation: "async marks a function as a coroutine that can be paused and resumed."
            },
            {
                question: "How do you create a generator expression?",
                options: [
                    "Using parentheses ()",
                    "Using square brackets []",
                    "Using curly braces {}",
                    "Using angle brackets <>"
                ],
                answer: "Using parentheses ()",
                hint: "Similar to list comprehensions but with different brackets.",
                explanation: "Generator expressions use the same syntax as list comprehensions but with () instead of []."
            },
            {
                question: "What is the purpose of the __next__() method?",
                options: [
                    "To initialize an iterator",
                    "To get the next item from an iterator",
                    "To check if iteration is complete",
                    "To reset an iterator"
                ],
                answer: "To get the next item from an iterator",
                hint: "It's part of the iterator protocol.",
                explanation: "__next__() returns the next item or raises StopIteration when exhausted."
            },
            {
                question: "Which decorator would you use to memoize function results?",
                options: ["@cache", "@memoize", "@lru_cache", "@remember"],
                answer: "@lru_cache",
                hint: "It's from the functools module.",
                explanation: "functools.lru_cache is Python's built-in decorator for memoization."
            },
            {
                question: "What is the main advantage of generators over lists?",
                options: [
                    "Faster execution",
                    "Memory efficiency",
                    "More methods available",
                    "Better type checking"
                ],
                answer: "Memory efficiency",
                hint: "Think about how they produce values.",
                explanation: "Generators produce values one at a time, avoiding storing the entire sequence in memory."
            },
            {
                question: "What does the gc module primarily manage?",
                options: [
                    "Memory allocation",
                    "Garbage collection",
                    "Global variables",
                    "Code compilation"
                ],
                answer: "Garbage collection",
                hint: "gc stands for garbage collector.",
                explanation: "The gc module provides control over Python's garbage collector."
            },
            {
                question: "What is the key difference between threading and multiprocessing?",
                options: [
                    "Threading uses more memory",
                    "Multiprocessing avoids GIL limitations",
                    "Threading provides true parallelism",
                    "Multiprocessing is limited to Unix systems"
                ],
                answer: "Multiprocessing avoids GIL limitations",
                hint: "Think about how Python handles threads vs processes.",
                explanation: "Multiprocessing uses separate processes (each with its own GIL) while threading is constrained by the GIL."
            },
            {
                question: "What does 'await' do in an async function?",
                options: [
                    "Pauses execution until the awaited task completes",
                    "Creates a new thread",
                    "Terminates the function",
                    "Schedules parallel execution"
                ],
                answer: "Pauses execution until the awaited task completes",
                hint: "It's used with coroutines.",
                explanation: "await yields control back to the event loop until the awaited coroutine completes."
            },
            {
                question: "Which method is called to initialize an iterator?",
                options: ["__init__()", "__iter__()", "__next__()", "__start__()"],
                answer: "__iter__()",
                hint: "It's part of the iterator protocol.",
                explanation: "__iter__() is called when an iterator is needed, typically returning self."
            },
            {
                question: "What is a common use case for closures?",
                options: [
                    "Implementing decorators",
                    "Creating function factories",
                    "Maintaining state between function calls",
                    "All of the above"
                ],
                answer: "All of the above",
                hint: "Closures are versatile in Python.",
                explanation: "Closures are used in all these scenarios due to their ability to remember enclosing scope variables."
            },
            {
                question: "What is tail recursion optimization?",
                options: [
                    "Converting recursion to iteration automatically",
                    "Optimizing the last call in a recursive function",
                    "Eliminating stack frames for recursive tail calls",
                    "A feature Python supports natively"
                ],
                answer: "Eliminating stack frames for recursive tail calls",
                hint: "Some languages can optimize this specific recursion pattern.",
                explanation: "It's an optimization where the compiler reuses the stack frame when the recursive call is the last operation (which Python doesn't implement)."
            },
            {
                question: "Which asyncio function runs multiple coroutines concurrently?",
                options: ["run()", "gather()", "wait()", "execute()"],
                answer: "gather()",
                hint: "It 'gathers' multiple coroutines to run together.",
                explanation: "asyncio.gather() schedules multiple coroutines to run concurrently and waits for all to complete."
            }
        ],
        "python-Libraries" : [
            {
                question: "Which library would you use for parsing HTML in web scraping?",
                options: ["requests", "BeautifulSoup", "Scrapy", "urllib"],
                answer: "BeautifulSoup",
                hint: "It's specifically designed for parsing HTML/XML.",
                explanation: "BeautifulSoup parses HTML/XML documents and provides methods to navigate and search the parse tree."
            },
            {
                question: "What is Flask primarily used for?",
                options: [
                    "Data analysis",
                    "Web application development",
                    "Machine learning",
                    "GUI development"
                ],
                answer: "Web application development",
                hint: "It's a micro web framework.",
                explanation: "Flask is a lightweight WSGI web application framework for building web applications and APIs."
            },
            {
                question: "Which library provides fast numerical computing with array operations?",
                options: ["pandas", "numpy", "scipy", "tensorflow"],
                answer: "numpy",
                hint: "Think of numerical Python.",
                explanation: "NumPy provides support for large, multi-dimensional arrays and matrices, along with mathematical functions."
            },
            {
                question: "What is the primary purpose of the subprocess module?",
                options: [
                    "To create new threads",
                    "To spawn new processes",
                    "To manage file operations",
                    "To handle network connections"
                ],
                answer: "To spawn new processes",
                hint: "It's for running system commands.",
                explanation: "The subprocess module allows you to spawn new processes, connect to their input/output/error pipes, and obtain their return codes."
            },
            {
                question: "Which ORM (Object-Relational Mapping) library is commonly used with Python?",
                options: ["psycopg2", "sqlite3", "SQLAlchemy", "Django ORM"],
                answer: "SQLAlchemy",
                hint: "It's database-agnostic.",
                explanation: "SQLAlchemy provides a full suite of patterns for ORM and SQL expression language."
            },
            {
                question: "What is the standard GUI library included with Python?",
                options: ["PyQt", "Tkinter", "Kivy", "wxPython"],
                answer: "Tkinter",
                hint: "It's part of Python's standard library.",
                explanation: "Tkinter is Python's de-facto standard GUI package, included with most Python installations."
            },
            {
                question: "Which testing framework is more feature-rich than unittest?",
                options: ["doctest", "pytest", "nose", "testify"],
                answer: "pytest",
                hint: "It's the most popular third-party testing framework.",
                explanation: "pytest offers more features and simpler syntax than unittest while being compatible with it."
            },
            {
                question: "Which library would you use for low-level network programming?",
                options: ["requests", "http.client", "socket", "urllib"],
                answer: "socket",
                hint: "It provides low-level networking interface.",
                explanation: "The socket module provides low-level networking interface, the foundation for most Python networking modules."
            },
            {
                question: "What is pandas primarily used for?",
                options: [
                    "Numerical computing",
                    "Data manipulation and analysis",
                    "Machine learning",
                    "Web development"
                ],
                answer: "Data manipulation and analysis",
                hint: "It provides DataFrame objects.",
                explanation: "pandas offers data structures and operations for manipulating numerical tables and time series."
            },
            {
                question: "Which framework is known for its 'batteries-included' approach?",
                options: ["Flask", "Django", "FastAPI", "Pyramid"],
                answer: "Django",
                hint: "It includes many built-in features.",
                explanation: "Django includes an ORM, admin interface, authentication system, and many other features out-of-the-box."
            },
            {
                question: "What is matplotlib primarily used for?",
                options: [
                    "Data cleaning",
                    "Data visualization",
                    "Statistical analysis",
                    "Machine learning"
                ],
                answer: "Data visualization",
                hint: "It's Python's main plotting library.",
                explanation: "matplotlib is a comprehensive library for creating static, animated, and interactive visualizations."
            },
            {
                question: "Which module would you use to delete a file in Python?",
                options: ["sys", "os", "shutil", "file"],
                answer: "os",
                hint: "It provides operating system interfaces.",
                explanation: "The os module provides os.remove() and os.unlink() for deleting files."
            },
            {
                question: "What is FastAPI known for?",
                options: [
                    "Being the simplest web framework",
                    "High performance and automatic docs",
                    "Best for machine learning only",
                    "Having the largest ecosystem"
                ],
                answer: "High performance and automatic docs",
                hint: "It's modern and fast.",
                explanation: "FastAPI is known for its high performance (Starlette and Pydantic based) and automatic interactive API documentation."
            },
            {
                question: "Which library is primarily used for deep learning?",
                options: ["scikit-learn", "tensorflow", "numpy", "pandas"],
                answer: "tensorflow",
                hint: "Developed by Google.",
                explanation: "TensorFlow is an end-to-end open source platform for machine learning, with particular focus on deep learning."
            },
            {
                question: "What is the main purpose of the requests library?",
                options: [
                    "Database queries",
                    "HTTP requests",
                    "File operations",
                    "Process management"
                ],
                answer: "HTTP requests",
                hint: "It's for working with web APIs.",
                explanation: "The requests library is the de facto standard for making HTTP requests in Python."
            },
            {
                question: "Which library provides cross-platform mobile app development?",
                options: ["Tkinter", "PyQt", "Kivy", "wxPython"],
                answer: "Kivy",
                hint: "It's designed for touch devices.",
                explanation: "Kivy is an open source Python library for developing multitouch applications that run on Windows, Linux, macOS, Android, and iOS."
            },
            {
                question: "What is scikit-learn primarily used for?",
                options: [
                    "Data visualization",
                    "Classical machine learning",
                    "Deep learning",
                    "Web scraping"
                ],
                answer: "Classical machine learning",
                hint: "It's built on NumPy/SciPy.",
                explanation: "scikit-learn provides simple and efficient tools for predictive data analysis and classical machine learning algorithms."
            },
            {
                question: "Which module would you use to run shell commands?",
                options: ["os", "sys", "subprocess", "sh"],
                answer: "subprocess",
                hint: "It's designed to replace older modules.",
                explanation: "The subprocess module is the recommended way to run shell commands and manage their execution."
            },
            {
                question: "What is PyTorch primarily used for?",
                options: [
                    "Data analysis",
                    "Computer vision and NLP",
                    "Web development",
                    "GUI programming"
                ],
                answer: "Computer vision and NLP",
                hint: "Developed by Facebook.",
                explanation: "PyTorch is an open source machine learning library particularly strong in computer vision and natural language processing applications."
            },
            {
                question: "Which library would you use for large-scale web scraping?",
                options: ["requests", "BeautifulSoup", "Scrapy", "urllib"],
                answer: "Scrapy",
                hint: "It's a full framework, not just a library.",
                explanation: "Scrapy is an open source framework for large-scale web scraping, providing built-in support for handling requests, pipelines, and more."
            }
        ],
        "Python Best Practices & Tools" : [
            {
                question: "What is the recommended line length limit according to PEP 8?",
                options: ["79 characters", "100 characters", "120 characters", "No limit"],
                answer: "79 characters",
                hint: "It's a specific number under 100.",
                explanation: "PEP 8 recommends limiting lines to 79 characters for code and 72 for docstrings/comments."
            },
            {
                question: "What is the primary purpose of Python virtual environments?",
                options: [
                    "To run Python faster",
                    "To isolate project dependencies",
                    "To create executable binaries",
                    "To improve code security"
                ],
                answer: "To isolate project dependencies",
                hint: "Think about managing different package versions for different projects.",
                explanation: "Virtual environments allow you to maintain separate sets of packages for different projects."
            },
            {
                question: "Which tool combines package management and virtual environment management?",
                options: ["pip", "venv", "pipenv", "conda"],
                answer: "pipenv",
                hint: "It's described as 'Python Development Workflow for Humans'.",
                explanation: "Pipenv combines pip and virtualenv functionality while improving dependency management."
            },
            {
                question: "What is the standard format for Python docstrings?",
                options: [
                    "Google style",
                    "NumPy style",
                    "reStructuredText",
                    "All of the above are accepted"
                ],
                answer: "All of the above are accepted",
                hint: "PEP 257 covers basic conventions but doesn't mandate a specific format.",
                explanation: "Python supports multiple docstring formats, though projects often standardize on one style."
            },
            {
                question: "Which command would you use to enter the Python debugger?",
                options: ["import pdb; pdb.run()", "import pdb; pdb.set_trace()", "debugger()", "breakpoint()"],
                answer: "breakpoint()",
                hint: "Python 3.7+ has a built-in function for this.",
                explanation: "breakpoint() is the modern way to enter the debugger (calls sys.breakpointhook())."
            },
            {
                question: "What is the purpose of the logging module?",
                options: [
                    "To print messages to console",
                    "To track events that happen when software runs",
                    "To document function parameters",
                    "To create code comments"
                ],
                answer: "To track events that happen when software runs",
                hint: "It's more sophisticated than print statements.",
                explanation: "The logging module provides flexible event logging for applications."
            },
            {
                question: "Which tool would you use to measure execution time of small code snippets?",
                options: ["time.time()", "timeit", "cProfile", "datetime.now()"],
                answer: "timeit",
                hint: "It's designed specifically for accurate timing.",
                explanation: "The timeit module provides a simple way to time small bits of Python code."
            },
            {
                question: "What do type hints in Python primarily provide?",
                options: [
                    "Runtime type checking",
                    "Better performance",
                    "Improved code readability and IDE support",
                    "Automatic type conversion"
                ],
                answer: "Improved code readability and IDE support",
                hint: "They're optional annotations.",
                explanation: "Type hints improve code documentation and enable better IDE support without runtime enforcement."
            },
            {
                question: "Which tool checks static type consistency in Python?",
                options: ["pytype", "pylint", "mypy", "flake8"],
                answer: "mypy",
                hint: "It's the most popular static type checker.",
                explanation: "mypy is a static type checker that checks type hints without running the code."
            },
            {
                question: "What is the recommended naming convention for functions in PEP 8?",
                options: [
                    "camelCase",
                    "PascalCase",
                    "snake_case",
                    "kebab-case"
                ],
                answer: "snake_case",
                hint: "All lowercase with underscores.",
                explanation: "PEP 8 recommends snake_case for function and variable names."
            },
            {
                question: "Which file is used to declare project dependencies in a Python project?",
                options: [
                    "requirements.txt",
                    "setup.py",
                    "pyproject.toml",
                    "All of the above"
                ],
                answer: "All of the above",
                hint: "Different tools use different files.",
                explanation: "Different tools use different files (pip uses requirements.txt, Poetry uses pyproject.toml, etc.)"
            },
            {
                question: "What is the purpose of Sphinx in Python?",
                options: [
                    "Code linting",
                    "Documentation generation",
                    "Package building",
                    "Test automation"
                ],
                answer: "Documentation generation",
                hint: "It's used by Python's official documentation.",
                explanation: "Sphinx is a documentation generator that converts reStructuredText files into various output formats."
            },
            {
                question: "Which tool would you use to identify performance bottlenecks?",
                options: ["timeit", "cProfile", "pdb", "mypy"],
                answer: "cProfile",
                hint: "It provides detailed profiling information.",
                explanation: "cProfile provides deterministic profiling of Python programs with detailed statistics."
            },
            {
                question: "What does the -> symbol indicate in Python function definitions?",
                options: [
                    "Function return type",
                    "Function is a generator",
                    "Function is async",
                    "Function is deprecated"
                ],
                answer: "Function return type",
                hint: "It's part of type hinting syntax.",
                explanation: "The -> symbol indicates the return type annotation in Python function definitions."
            },
            {
                question: "Which command creates a new virtual environment using venv?",
                options: [
                    "python -m venv myenv",
                    "virtualenv myenv",
                    "python create venv myenv",
                    "venv new myenv"
                ],
                answer: "python -m venv myenv",
                hint: "It uses Python's module execution syntax.",
                explanation: "This is the standard way to create a virtual environment using Python's built-in venv module."
            },
            {
                question: "What is the purpose of __init__.py files?",
                options: [
                    "To mark Python package directories",
                    "To initialize variables",
                    "To define main functions",
                    "To store package metadata"
                ],
                answer: "To mark Python package directories",
                hint: "They're needed for Python to recognize directories as packages.",
                explanation: "__init__.py files (even empty ones) tell Python that a directory should be treated as a package."
            },
            {
                question: "Which tool manages dependency versions and virtual environments together?",
                options: ["pip", "virtualenv", "poetry", "conda"],
                answer: "poetry",
                hint: "It's a modern dependency management tool.",
                explanation: "Poetry handles dependency management and packaging while managing virtual environments."
            },
            {
                question: "What is the recommended way to format multi-line imports?",
                options: [
                    "One import per line",
                    "Grouped with parentheses",
                    "All on one line separated by commas",
                    "Using backslash line continuation"
                ],
                answer: "Grouped with parentheses",
                hint: "PEP 8 has specific recommendations for imports.",
                explanation: "PEP 8 recommends grouping imports with parentheses for multi-line imports."
            },
            {
                question: "Which tool would you use to check code style against PEP 8?",
                options: ["pylint", "flake8", "black", "All of the above"],
                answer: "All of the above",
                hint: "Multiple tools can check PEP 8 compliance.",
                explanation: "While they serve different purposes, all these tools can check for PEP 8 compliance."
            },
            {
                question: "What is the main advantage of using type hints?",
                options: [
                    "Faster execution",
                    "Better code documentation and IDE support",
                    "Automatic type conversion",
                    "Smaller memory footprint"
                ],
                answer: "Better code documentation and IDE support",
                hint: "They help developers understand code better.",
                explanation: "Type hints improve code readability and enable better IDE features like autocompletion and error detection."
            }
        ],
        "python3-Features" : [
            {
                question: "What does the walrus operator (:=) do in Python?",
                options: [
                    "Assigns and returns a value in the same expression",
                    "Compares two values",
                    "Performs bitwise OR operation",
                    "Creates a new variable scope"
                ],
                answer: "Assigns and returns a value in the same expression",
                hint: "It looks like a walrus's eyes and tusks.",
                explanation: "The walrus operator allows assignment expressions, assigning values to variables as part of larger expressions."
            },
            {
                question: "Which Python version introduced structural pattern matching (match-case)?",
                options: ["Python 3.8", "Python 3.9", "Python 3.10", "Python 3.11"],
                answer: "Python 3.10",
                hint: "It was one of the headline features of this version.",
                explanation: "Structural pattern matching was introduced in Python 3.10 as a more powerful alternative to if-elif chains."
            },
            {
                question: "What can you now include directly in f-strings in Python 3.8+?",
                options: [
                    "Function definitions",
                    "Equal sign (=) for debugging",
                    "Type annotations",
                    "Import statements"
                ],
                answer: "Equal sign (=) for debugging",
                hint: "It helps with quick debugging output.",
                explanation: "Python 3.8 added = specifier in f-strings to print both the expression and its value (f'{x=}' prints 'x=value')."
            },
            {
                question: "What is the main benefit of using @dataclass?",
                options: [
                    "Automatic generation of special methods",
                    "Better performance",
                    "Smaller memory footprint",
                    "Built-in database support"
                ],
                answer: "Automatic generation of special methods",
                hint: "It reduces boilerplate code.",
                explanation: "@dataclass automatically generates __init__(), __repr__(), and other special methods based on class attributes."
            },
            {
                question: "Which Python version introduced the | operator for type unions?",
                options: ["Python 3.7", "Python 3.8", "Python 3.9", "Python 3.10"],
                answer: "Python 3.10",
                hint: "This was part of PEP 604.",
                explanation: "Python 3.10 introduced X | Y syntax for Union types as an alternative to typing.Union[X, Y]."
            },
            {
                question: "What does this match-case pattern match: case [x, y, *rest]?",
                options: [
                    "Only lists with exactly 3 elements",
                    "Any sequence with at least 2 elements",
                    "Only tuples with 2 elements",
                    "Any mapping with x and y keys"
                ],
                answer: "Any sequence with at least 2 elements",
                hint: "The *rest part is important.",
                explanation: "This pattern matches any sequence with at least 2 elements, binding the first two to x and y and the rest to rest."
            },
            {
                question: "Which Python version made dicts ordered by default?",
                options: ["Python 3.5", "Python 3.6", "Python 3.7", "Python 3.8"],
                answer: "Python 3.7",
                hint: "It was an implementation detail in 3.6 that became guaranteed in 3.7.",
                explanation: "Python 3.7 made dictionary order preservation an official language feature (it was implementation-dependent in 3.6)."
            },
            {
                question: "What does typing.Literal provide?",
                options: [
                    "Type hints for specific values",
                    "Literal string types",
                    "Constant value enforcement",
                    "All of the above"
                ],
                answer: "Type hints for specific values",
                hint: "It's useful for function parameters with limited valid values.",
                explanation: "typing.Literal allows type checkers to expect exactly one of specific literal values."
            },
            {
                question: "Which Python version introduced the @dataclass decorator?",
                options: ["Python 3.5", "Python 3.6", "Python 3.7", "Python 3.8"],
                answer: "Python 3.7",
                hint: "It was part of PEP 557.",
                explanation: "The dataclasses module with @dataclass decorator was introduced in Python 3.7."
            },
            {
                question: "What does typing.Final indicate?",
                options: [
                    "A variable should not be reassigned",
                    "A class cannot be inherited",
                    "A function cannot be overridden",
                    "All of the above"
                ],
                answer: "All of the above",
                hint: "It's used to declare things that shouldn't be changed.",
                explanation: "typing.Final can be used for variables, classes, and methods to indicate they shouldn't be modified or overridden."
            },
            {
                question: "Which Python version added the zoneinfo module?",
                options: ["Python 3.8", "Python 3.9", "Python 3.10", "Python 3.11"],
                answer: "Python 3.9",
                hint: "It was part of PEP 615.",
                explanation: "The zoneinfo module provides timezone support using the system's timezone data, added in Python 3.9."
            },
            {
                question: "What is the purpose of typing.Protocol?",
                options: [
                    "To define abstract base classes",
                    "To implement structural subtyping",
                    "To create type aliases",
                    "To mark classes as final"
                ],
                answer: "To implement structural subtyping",
                hint: "It's Python's version of interfaces.",
                explanation: "typing.Protocol allows structural subtyping (duck typing) for static type checkers."
            },
            {
                question: "Which Python version introduced self-documenting f-strings with =?",
                options: ["Python 3.6", "Python 3.7", "Python 3.8", "Python 3.9"],
                answer: "Python 3.8",
                hint: "This was part of PEP 572.",
                explanation: "Python 3.8 added the = specifier to f-strings for self-documenting expressions and debugging."
            },
            {
                question: "What does typing.Annotated allow you to do?",
                options: [
                    "Add metadata to type hints",
                    "Create type aliases",
                    "Define abstract base classes",
                    "Mark deprecated functions"
                ],
                answer: "Add metadata to type hints",
                hint: "It's useful for adding context to types.",
                explanation: "typing.Annotated allows adding arbitrary metadata to type hints while preserving the original type."
            },
            {
                question: "Which Python version introduced the math.prod() function?",
                options: ["Python 3.7", "Python 3.8", "Python 3.9", "Python 3.10"],
                answer: "Python 3.8",
                hint: "It was a small but useful addition to the math module.",
                explanation: "math.prod() calculates the product of all elements in an iterable, added in Python 3.8."
            },
            {
                question: "What is the purpose of @typing.final decorator?",
                options: [
                    "To prevent method overriding",
                    "To mark a class as non-inheritable",
                    "To indicate a function shouldn't be decorated",
                    "All of the above"
                ],
                answer: "All of the above",
                hint: "It's about preventing modifications.",
                explanation: "@typing.final can be used to prevent inheritance, overriding, or decoration depending on where it's applied."
            },
            {
                question: "Which Python version introduced the removeprefix() and removesuffix() methods?",
                options: ["Python 3.8", "Python 3.9", "Python 3.10", "Python 3.11"],
                answer: "Python 3.9",
                hint: "These were long-requested string methods.",
                explanation: "str.removeprefix() and str.removesuffix() were added in Python 3.9 for convenient string manipulation."
            },
            {
                question: "What does typing.Required do in Python 3.11+?",
                options: [
                    "Marks a function parameter as required",
                    "Indicates a TypedDict field must be present",
                    "Forces type checking of a variable",
                    "All of the above"
                ],
                answer: "Indicates a TypedDict field must be present",
                hint: "It's used with TypedDict.",
                explanation: "typing.Required marks a field as required in a TypedDict (introduced in Python 3.11)."
            },
            {
                question: "Which Python version added the ExceptionGroup and except* syntax?",
                options: ["Python 3.9", "Python 3.10", "Python 3.11", "Python 3.12"],
                answer: "Python 3.11",
                hint: "This was part of PEP 654.",
                explanation: "ExceptionGroup and except* for handling multiple exceptions were added in Python 3.11."
            },
            {
                question: "What is the purpose of typing.Never?",
                options: [
                    "To indicate a function never returns",
                    "To mark code that shouldn't be reached",
                    "To type empty collections",
                    "All of the above"
                ],
                answer: "All of the above",
                hint: "It's used for functions that always raise exceptions or infinite loops.",
                explanation: "typing.Never indicates code that should never execute or functions that never return normally."
            }
        ]

};

// Global Variables
let currentTopic = "";
let currentQuestionIndex = 0;
let userAnswers = {};
let showHint = false;

// Topic Selection
function selectTopic(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    userAnswers = {};
    showHint = false;
    loadQuiz();
    document.getElementById("topicContainer").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("btnContainer").style.display = "block";
    document.getElementById("quizCount").style.display = "block";
}

// Load the quiz based on the selected topic
function loadQuiz() {
    if (!currentTopic) return;

    const topicData = quizData[currentTopic];
    const question = topicData[currentQuestionIndex];

    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = `
        <h3>${currentTopic}</h3>
        <div class="question">
            <p>${question.question}</p>
            <div class="options">
                ${question.options.map(option => `
                    <label>
                        <input type="radio" name="answer" value="${option}" ${userAnswers[currentQuestionIndex] === option ? 'checked' : ''} onclick="selectAnswer('${option}')">
                        ${option}
                    </label>
                `).join('')}
            </div>
            ${showHint ? `<p class="hint">Hint: ${question.hint}</p>` : ''}
            ${userAnswers[currentQuestionIndex] !== undefined ? `
                <p class="feedback" style="color: ${userAnswers[currentQuestionIndex] === question.answer ? 'green' : 'red'};">
                    ${userAnswers[currentQuestionIndex] === question.answer ? 'Correct!' : `Incorrect. The correct answer is: ${question.answer}.`}
                </p>
            ` : ''}
        </div>
    `;

    // Update quiz count
    document.getElementById("currentQuestionIndex").innerText = currentQuestionIndex + 1;
    document.getElementById("totalQuestions").innerText = topicData.length;

    // Enable/Disable buttons based on the question index
    document.getElementById("previousBtn").disabled = currentQuestionIndex === 0;
    document.getElementById("nextBtn").disabled = currentQuestionIndex === topicData.length - 1;
}

// Handle answer selection
function selectAnswer(option) {
    userAnswers[currentQuestionIndex] = option;
    loadQuiz();
}

// Show or hide the hint
function toggleHint() {
    showHint = !showHint;
    loadQuiz();
}

// Navigate between questions
function navigate(direction) {
    const topicData = quizData[currentTopic];

    if (direction === 1 && currentQuestionIndex < topicData.length - 1) {
        currentQuestionIndex++;
    } else if (direction === -1 && currentQuestionIndex > 0) {
        currentQuestionIndex--;
    }

    loadQuiz();
}

// Go Back to Topic Selection
function goBack() {
    currentTopic = "";
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById("topicContainer").style.display = "block";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("btnContainer").style.display = "none";
    document.getElementById("quizCount").style.display = "none";
}
