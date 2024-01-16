/*
    ==================== Functions =================


    So what is a function? 
    
    It's a separated piece of code, constituting a certain closed logical whole, 
    intended to perform a specific task. We usually assign a name to such a separated piece of code. 
    With this name, we can call it (execute it) many times in different places of the program.

    Why do we use functions?
    
    There are many reasons, one of the most important being to divide the code into some logically independent parts. 
    Such modularity increases the readability of the code – it is easier to write and analyze a long program that is not a sequence of single instructions. 
    It also allows for easy testing of code fragments closed in functions independently of the rest of the program.

    A very important reason for using a function is the reuse of code 
    – if you repeat the same sequence of instructions in the program in many places, you can close this sequence in a function, and in those places you only have to call the function.

    Apart from reducing the amount of code in a program (thus increasing its readability), it also means that if you need to make some changes in this sequence of instructions, you have to do it only once, inside the function. If we didn’t use a function in this situation, we would have to make changes independently in every place where this sequence of instructions appeared in the code.

*/