<!-- the following procedure is for browser console which is main javascript terminal for running. -->

Javascript Execution Context => how did the file runs

1. <code> = Global Execution Context = executed in thread. 
javascript is single threaded

2. Functional Execution Context

3. Eval Execution Context = property of gloabal object 

runs in two phases = 
1. Memory Creation Phase (creation phase in short) = Memory allocation work 
2. Execution Phase = operation works

// look following code:
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total 
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


// Steps:
1. Global Execution (Environment) = llocates in this
2. Memory Phase =
    val1 -> undefined
    val2 -> undefined
    addNum -> definition
    result1 -> undefined   // 15
    result2 -> undefined   // 12
3. Execution Phase -> 
    val1 -> 10
    val2 -> 5
    addNum = it makes another execution context => (new Executional Context)
                                new variable environment + Execution thread

                                # now memory phase and execution phase happens in this also.
                                Memory Phase =
                                    val1 -> undefined
                                    val2 -> undefined
                                    total -> undefined
                                
                                Execution Context = 
                                    num1 -> 10
                                    num2 -> 5
                                    total -> 15  (it returns in global executional context)

                                    // This new Executional Context deleted after completion of its work.


                                => new variable environment created for result2 and same process repeats again.



=== Call Stacks ===  # LIFO Concept 

                one() ->        one()    # removes after completion
                                Global Execution


Javascript is a synchronous language and is a single threaded.

-> Execution Context = Execute one line of code at a time. 
console.log("one") -> console.log("two")    #Call Stack    #Memory help 

=> Each operation waits for the last one to complete before executing. 


==== Blocking Code vs Non Blocking Code ====

Blocking Code => Block the flow of programme => Read File Synchronous
Non Blocking Code => Does not block execution => Read File Asynchronous

