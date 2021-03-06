"""
Min Stack
Solution
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.


   Hide Hint #1
Consider each node in the stack having a minimum value. (Credits to @aakarshmadhavan)
"""


class MinStack:

    def __init__(self):
        self.myStack = []
        """
        initialize your data structure here.
        """


    def push(self, x: int) -> None:
        min = x;
        if self.myStack:
            min = self.myStack[-1][1]
            if min>x:
                min=x
        self.myStack.append((x,min))

    def pop(self) -> None:
        self.myStack.pop()

    def top(self) -> int:
        return self.myStack[-1][0]

    def getMin(self) -> int:
        return self.myStack[-1][1]



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
