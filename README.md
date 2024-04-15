# Questions

1. Explain the difference between a stack and a queue. Provide examples of real-life scenarios where each of them are used appropriately.

   Stacks and queues are data structures that store elements in a specific order. Stacks add and remove elements from the top of the stack (Last In First Out - LIFO), while queues add elements to the back of the queue and remove elements from the front of the queue (First In First Out - FIFO).

   Typically, stacks are used in scenarios like the browser history, the most recent page visited is the first page to be displayed when the back button is clicked. Another example is the undo feature in text editors, where the last action performed is the first action to be undone.

   Queues are used in operating systems for execution queues, where processes are added to the queue and executed in the order they were added. Another example is message queuing systems like RabbitMQ or Kafka, which queues to distribute messages to consumers.

2. What is the difference between an array and a linked list? Provide advantages and disadvantages of each data structure.

   Arrays store elements in memory locations that are contiguous, while linked lists store elements in non-contiguous memory locations with pointers to the next element. This makes arrays have a fixed size, while linked lists can grow dynamically.

   Arrays also provide the advantage of accessing elements in constant time using an index, while for linked lists, accessing elements requires traversing the list from the beginning.

   However, inserting or deleting elements in the middle of an array can be expensive, as it requires shifting elements. Linked lists can insert or delete elements efficiently, by changing pointers.

3. What is HTTP? How is it different from HTTPS?

   HTTP is a network protocol used for transferring data over the internet. HTTPS is basically the premium version of HTTP, where the data is encrypted, for added security and privacy.

4. Common HTTP response codes:

   - 200 - OK - The request has succeeded

   - 201 - Created - The request was successful and a new resource was created

   - 400 - Bad Request - The request cannot be processed

   - 401 - Unauthorized - The request requires user authentication

   - 403 - Forbidden - The user is authenticated but does not have permission to access the resource

   - 404 - Not Found - The requested resource could not be found

   - 418 - I'm a teapot - April Fools joke response code

   - 500 - Internal Server Error - The server encountered an unexpected condition

5. What is the difference between authorization and authentication?

   Authentication verifies the identity of a user, while authorization determines what actions a user is allowed to perform.

   Basically, authentication is the process of logging in, while authorization is the process of managing permissions after logging in.

6. How would you explain to a 5-year-old how the WWW works?

   The World Wide Web is actually just a really big computer network of connected computers all over the world. Each of these computers has a special name, called an address, that you can use to find them. When you want to see a website, you tell your computer the name of the website, and it brings it to you. This is done using a request-response system, where you ask for information, and the computer sends it back to you. Each of the websites is like a book in a library, and you can read them by asking your computer to bring them to you. And just like books, these websites can contain pages with lots of information/pictures or files, these are called web pages. When using a browser to search for something, a program called a search engine helps you find the right website you are looking for, it goes through the computer network and finds the websites that match your search.

7. Printing a staircase of size n.

   A simple Typescript solution is just to loop through each step and print the spaces and hashes accordingly: n - i spaces and i hashes, where i is the current step number (1 indexed).

   Full code: [staircase.ts](staircase.ts)

   ```ts
   function staircase(n: number): void {
     for (let step = 1; step <= n; step++) {
       console.log(" ".repeat(n - step) + "#".repeat(step));
     }
   }
   ```

8. Encrypt a string following the specified algorithm.

   Removing the whitespaces from the string can be achieved really easily using a regex. After that, we calculate the number of rows and columns based on the length of the text, then use slices to print the rows.

   We also need to consider the edge cases: where the row \* column matrix is not enough to fit all the characters, I just incremented the row count in that case; and the last slice might have fewer characters than the column count, so just pick the minimum between the end index calculated and the length of the text.

   Full code with comments: [encryption.ts](encryption.ts)

   ```ts
   function encrypt(text: string) {
     const cleanText = text.replaceAll(/\s/g, "");

     const length = cleanText.length;
     const rows = Math.floor(Math.sqrt(length));
     const cols = Math.ceil(Math.sqrt(length));

     for (let i = 0; i < rows; i++) {
       const startIdx = i * cols;
       const endIdx = Math.min(startIdx + cols, length);

       const row = cleanText.slice(startIdx, endIdx);
       console.log(row);
     }
   }
   ```

## Notes

For both questions 7 and 8, I used [Deno](https://deno.com/), a personal preference, and it's easier to get user input compared to Node.js. The code can be run using the following command:

```bash
deno run staircase.ts
deno run encryption.ts
```

I also included the code for the problems in Golang (I had a hard time choosing, but I think Typescript just looks a bit cleaner for these problems), in the `go` folder.
