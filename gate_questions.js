// gate_questions.js

// This file contains a comprehensive list of GATE CSE practice questions, categorized by subject.
// It is designed to be loaded by index.html to keep the main HTML file lightweight.

window.GATE_CSE_QUESTIONS = [
    // Data Structures & Algorithms (DSA) - 15 questions
    {
        id: 101,
        subject: 'dsa',
        difficulty: 'medium',
        question: 'What is the worst-case time complexity of quicksort?',
        options: ['O(n log n)', 'O(n)', 'O(n^2)', 'O(log n)'],
        correctAnswer: 2,
        explanation: 'The worst-case time complexity of quicksort occurs when the pivot selection consistently results in highly unbalanced partitions, leading to O(n^2) complexity. This happens, for example, when the array is already sorted or reverse sorted and the pivot is always chosen as the first or last element.'
    },
    {
        id: 102,
        subject: 'dsa',
        difficulty: 'easy',
        question: 'Which data structure is best suited for implementing a breadth-first search (BFS) algorithm?',
        options: ['Stack', 'Queue', 'Array', 'Linked List'],
        correctAnswer: 1,
        explanation: 'BFS explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. A queue is used to store the nodes to visit, ensuring that nodes are processed in the order they were discovered.'
    },
    {
        id: 103,
        subject: 'dsa',
        difficulty: 'hard',
        question: 'What is the maximum number of nodes in a binary tree of height h?',
        options: ['2h', '2h - 1', '2^(h+1) - 1', '2^(h)'],
        correctAnswer: 2,
        explanation: 'In a complete binary tree, each level is fully filled. For a height h (where the root is at height 0), there are 2^0 nodes at level 0, 2^1 nodes at level 1, ..., 2^h nodes at level h. The total number of nodes is the sum of a geometric series: 2^0 + 2^1 + ... + 2^h = 2^(h+1) - 1.'
    },
    {
        id: 104,
        subject: 'dsa',
        difficulty: 'medium',
        question: 'Which of the following sorting algorithms has the best average-case time complexity?',
        options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
        correctAnswer: 2,
        explanation: 'Merge Sort has an average-case time complexity of O(n log n), which is generally considered the best among the given options for large datasets. Quicksort also has O(n log n) on average, but its worst-case is O(n^2).'
    },
    {
        id: 105,
        subject: 'dsa',
        difficulty: 'easy',
        question: 'A stack is a data structure that follows which principle?',
        options: ['FIFO (First-In, First-Out)', 'LIFO (Last-In, First-Out)', 'Random Access', 'Sorted Order'],
        correctAnswer: 1,
        explanation: 'A stack operates on the LIFO principle, meaning the last element added to the stack is the first one to be removed.'
    },
    {
        id: 106,
        subject: 'dsa',
        difficulty: 'medium',
        question: 'What is the space complexity of a recursive algorithm for calculating factorial?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
        correctAnswer: 2,
        explanation: 'The space complexity of a recursive factorial algorithm is O(n) due to the call stack. Each recursive call adds a new stack frame, and for factorial(n), there will be n stack frames before the base case is reached.'
    },
    {
        id: 107,
        subject: 'dsa',
        difficulty: 'medium',
        question: 'Which traversal method visits the root node last in a binary search tree?',
        options: ['Inorder', 'Preorder', 'Postorder', 'Level-order'],
        correctAnswer: 2,
        explanation: 'In a postorder traversal, the left subtree is visited first, then the right subtree, and finally the root node. This means the root is visited last.'
    },
    {
        id: 108,
        subject: 'dsa',
        difficulty: 'hard',
        question: 'What is the time complexity to find an element in a hash table in the average case?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correctAnswer: 0,
        explanation: 'In the average case, assuming a good hash function and minimal collisions, finding an element in a hash table takes O(1) time. In the worst case, it can degrade to O(n).'
    },
    {
        id: 109,
        subject: 'dsa',
        difficulty: 'easy',
        question: 'Which of the following is a non-linear data structure?',
        options: ['Array', 'Linked List', 'Tree', 'Queue'],
        correctAnswer: 2,
        explanation: 'Arrays, linked lists, and queues are linear data structures where elements are arranged sequentially. Trees, on the other hand, are hierarchical and non-linear.'
    },
    {
        id: 110,
        subject: 'dsa',
        difficulty: 'medium',
        question: 'What is the purpose of Dijkstra\'s algorithm?',
        options: ['To find the shortest path in a graph with negative edge weights', 'To find the shortest path in a graph with non-negative edge weights', 'To find all-pairs shortest paths', 'To find the minimum spanning tree'],
        correctAnswer: 1,
        explanation: 'Dijkstra\'s algorithm is used to find the shortest paths between nodes in a graph, but it only works correctly when all edge weights are non-negative.'
    },
    {
        id: 111,
        subject: 'dsa',
        difficulty: 'medium',
        question: 'In which data structure are elements inserted and deleted from the same end?',
        options: ['Queue', 'Stack', 'Deque', 'Priority Queue'],
        correctAnswer: 1,
        explanation: 'In a stack, elements are added (pushed) and removed (popped) from the same end, typically referred to as the "top" of the stack.'
    },
    {
        id: 112,
        subject: 'dsa',
        difficulty: 'hard',
        question: 'What is the time complexity of building a min-heap from an array of n elements?',
        options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)'],
        correctAnswer: 1,
        explanation: 'Building a min-heap (or max-heap) from an unsorted array of n elements can be done in O(n) time using the heapify procedure, which involves calling heapify on each non-leaf node from bottom-up.'
    },
    {
        id: 113,
        subject: 'dsa',
        difficulty: 'easy',
        question: 'Which of the following is an example of a divide and conquer algorithm?',
        options: ['Linear Search', 'Bubble Sort', 'Merge Sort', 'Insertion Sort'],
        correctAnswer: 2,
        explanation: 'Merge Sort is a classic example of a divide and conquer algorithm. It divides the array into two halves, recursively sorts them, and then merges the sorted halves.'
    },
    {
        id: 114,
        subject: 'dsa',
        difficulty: 'medium',
        question: 'What is the primary advantage of using a balanced binary search tree (e.g., AVL tree, Red-Black tree)?',
        options: ['Faster insertion only', 'Faster deletion only', 'Guaranteed O(log n) time complexity for search, insertion, and deletion', 'Reduced memory usage'],
        correctAnswer: 2,
        explanation: 'Balanced binary search trees maintain a logarithmic height, ensuring that search, insertion, and deletion operations always have a time complexity of O(log n) in the worst case, unlike unbalanced BSTs which can degrade to O(n).'
    },
    {
        id: 115,
        subject: 'dsa',
        difficulty: 'medium',
        question: 'Which algorithm is used to find the shortest path from a single source to all other vertices in a graph with non-negative edge weights?',
        options: ['Floyd-Warshall', 'Bellman-Ford', 'Prim\'s', 'Dijkstra\'s'],
        correctAnswer: 3,
        explanation: 'Dijkstra\'s algorithm is specifically designed to find the shortest paths from a single source vertex to all other vertices in a graph where all edge weights are non-negative.'
    },

    // Computer Networks (Networks) - 13 questions
    {
        id: 201,
        subject: 'networks',
        difficulty: 'medium',
        question: 'Which of the following protocols is used for reliable data transfer over the internet?',
        options: ['UDP', 'IP', 'TCP', 'ARP'],
        correctAnswer: 2,
        explanation: 'TCP (Transmission Control Protocol) provides reliable, ordered, and error-checked delivery of a stream of octets between applications running on hosts communicating via an IP network. UDP (User Datagram Protocol) is connectionless and unreliable.'
    },
    {
        id: 202,
        subject: 'networks',
        difficulty: 'easy',
        question: 'What is the primary function of the Network Layer in the OSI model?',
        options: ['Data encryption', 'Packet routing', 'Error detection', 'Flow control'],
        correctAnswer: 1,
        explanation: 'The Network Layer (Layer 3) is responsible for logical addressing and routing of packets from the source to the destination across different networks.'
    },
    {
        id: 203,
        subject: 'networks',
        difficulty: 'hard',
        question: 'In IPv4, what is the maximum number of hosts possible in a Class C network?',
        options: ['254', '255', '256', '65534'],
        correctAnswer: 0,
        explanation: 'A Class C network uses the first three octets for the network ID and the last octet for host IDs. This leaves 8 bits for host addresses. The number of usable host addresses is 2^8 - 2 (subtracting the network address and the broadcast address), which equals 254.'
    },
    {
        id: 204,
        subject: 'networks',
        difficulty: 'medium',
        question: 'Which of the following is a connectionless protocol?',
        options: ['FTP', 'HTTP', 'TCP', 'UDP'],
        correctAnswer: 3,
        explanation: 'UDP (User Datagram Protocol) is a connectionless protocol, meaning it does not establish a connection before sending data. TCP, FTP, and HTTP are connection-oriented protocols that rely on TCP for reliable communication.'
    },
    {
        id: 205,
        subject: 'networks',
        difficulty: 'easy',
        question: 'What is the full form of DNS?',
        options: ['Domain Name System', 'Dynamic Network Service', 'Data Naming Standard', 'Digital Network Security'],
        correctAnswer: 0,
        explanation: 'DNS stands for Domain Name System. It translates human-readable domain names (like google.com) into machine-readable IP addresses.'
    },
    {
        id: 206,
        subject: 'networks',
        difficulty: 'medium',
        question: 'Which device operates at the Data Link Layer (Layer 2) of the OSI model?',
        options: ['Router', 'Hub', 'Switch', 'Repeater'],
        correctAnswer: 2,
        explanation: 'A switch operates at the Data Link Layer (Layer 2) and uses MAC addresses to forward frames to specific devices on a local area network (LAN).'
    },
    {
        id: 207,
        subject: 'networks',
        difficulty: 'hard',
        question: 'What is the purpose of the ARP protocol?',
        options: ['To resolve IP addresses to domain names', 'To resolve MAC addresses to IP addresses', 'To resolve IP addresses to MAC addresses', 'To manage network congestion'],
        correctAnswer: 2,
        explanation: 'ARP (Address Resolution Protocol) is used to resolve an IP address to a physical MAC address on a local area network.'
    },
    {
        id: 208,
        subject: 'networks',
        difficulty: 'medium',
        question: 'Which of the following is a private IPv4 address range?',
        options: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', 'All of the above'],
        correctAnswer: 3,
        explanation: 'All three ranges (10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, and 192.168.0.0 to 192.168.255.255) are reserved for private networks and are not routable on the public internet.'
    },
    {
        id: 209,
        subject: 'networks',
        difficulty: 'easy',
        question: 'Which layer is responsible for converting data into signals for transmission over the physical medium?',
        options: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer'],
        correctAnswer: 0,
        explanation: 'The Physical Layer (Layer 1) is responsible for the physical transmission of raw bit streams over the physical medium, including defining electrical and mechanical specifications.'
    },
    {
        id: 210,
        subject: 'networks',
        difficulty: 'medium',
        question: 'What is the purpose of a firewall in a network?',
        options: ['To speed up network traffic', 'To block unauthorized access and protect against malicious attacks', 'To translate domain names to IP addresses', 'To manage network cabling'],
        correctAnswer: 1,
        explanation: 'A firewall acts as a security barrier, monitoring and controlling incoming and outgoing network traffic based on predetermined security rules to protect a network from unauthorized access and threats.'
    },
    {
        id: 211,
        subject: 'networks',
        difficulty: 'medium',
        question: 'Which congestion control algorithm is used by TCP?',
        options: ['Leaky Bucket', 'Token Bucket', 'Slow Start and Congestion Avoidance', 'Random Early Detection (RED)'],
        correctAnswer: 2,
        explanation: 'TCP uses a combination of algorithms, including Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery, to manage network congestion and ensure reliable data transfer.'
    },
    {
        id: 212,
        subject: 'networks',
        difficulty: 'hard',
        question: 'What is the maximum segment size (MSS) in TCP?',
        options: ['The maximum size of the TCP header', 'The maximum amount of data that can be sent in a single TCP segment', 'The maximum window size', 'The maximum number of retransmissions'],
        correctAnswer: 1,
        explanation: 'The Maximum Segment Size (MSS) is the largest amount of data, specified in bytes, that a computer or communications device can receive in a single TCP segment. It does not include the TCP header or the IP header.'
    },
    {
        id: 213,
        subject: 'networks',
        difficulty: 'medium',
        question: 'Which of the following is a broadcast address in a network with IP address 192.168.1.0/24?',
        options: ['192.168.1.1', '192.168.1.254', '192.168.1.255', '192.168.1.0'],
        correctAnswer: 2,
        explanation: 'For a /24 subnet (255.255.255.0), the network address is 192.168.1.0 and the broadcast address is 192.168.1.255. The broadcast address is used to send data to all hosts on that specific network segment.'
    },

    // Operating Systems (OS) - 13 questions
    {
        id: 301,
        subject: 'os',
        difficulty: 'medium',
        question: 'What is the primary purpose of a process control block (PCB)?',
        options: ['To store the program code', 'To store the data segment of a process', 'To store the state and context of a process', 'To manage I/O operations'],
        correctAnswer: 2,
        explanation: 'A Process Control Block (PCB) is a data structure maintained by the operating system for each process. It contains all the information needed to manage a process, including its state, program counter, CPU registers, memory management information, I/O status, and accounting information.'
    },
    {
        id: 302,
        subject: 'os',
        difficulty: 'easy',
        question: 'Which of the following is a type of memory allocation where memory is allocated at compile time?',
        options: ['Static allocation', 'Dynamic allocation', 'Heap allocation', 'Stack allocation'],
        correctAnswer: 0,
        explanation: 'Static memory allocation occurs at compile time, where the size and location of memory are fixed before program execution. Dynamic, heap, and stack allocations happen at runtime.'
    },
    {
        id: 303,
        subject: 'os',
        difficulty: 'hard',
        question: 'What is "thrashing" in an operating system?',
        options: ['Excessive CPU utilization', 'Excessive paging activity leading to low CPU utilization', 'A type of deadlock', 'A memory leak'],
        correctAnswer: 1,
        explanation: 'Thrashing occurs when a process spends more time paging (swapping pages between main memory and disk) than executing instructions. This happens when the operating system tries to run too many processes with insufficient physical memory, leading to a high page fault rate and poor system performance.'
    },
    {
        id: 304,
        subject: 'os',
        difficulty: 'medium',
        question: 'Which scheduling algorithm gives the CPU to the process that has the smallest burst time?',
        options: ['FCFS (First-Come, First-Served)', 'SJF (Shortest Job First)', 'Round Robin', 'Priority Scheduling'],
        correctAnswer: 1,
        explanation: 'Shortest Job First (SJF) scheduling algorithm selects the process with the smallest execution time (burst time) to execute next. It can be preemptive or non-preemptive.'
    },
    {
        id: 305,
        subject: 'os',
        difficulty: 'easy',
        question: 'What is a "deadlock" in an operating system?',
        options: ['When a process never finishes execution', 'When two or more processes are blocked indefinitely, waiting for each other to release resources', 'When the system runs out of memory', 'When a process tries to access an invalid memory location'],
        correctAnswer: 1,
        explanation: 'A deadlock is a situation where two or more processes are unable to proceed because each is waiting for the other to release a resource that it needs.'
    },
    {
        id: 306,
        subject: 'os',
        difficulty: 'medium',
        question: 'Which of the following is NOT a condition for deadlock?',
        options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Starvation'],
        correctAnswer: 3,
        explanation: 'The four necessary conditions for a deadlock to occur are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Starvation is a problem where a process is indefinitely delayed from gaining access to a resource, but it is not a condition for deadlock itself.'
    },
    {
        id: 307,
        subject: 'os',
        difficulty: 'hard',
        question: 'What is the purpose of a Translation Lookaside Buffer (TLB)?',
        options: ['To store frequently accessed data blocks', 'To speed up virtual-to-physical address translation', 'To manage I/O requests', 'To store process IDs'],
        correctAnswer: 1,
        explanation: 'A TLB is a cache that stores recent virtual-to-physical address translations. It is used to speed up the process of converting virtual addresses generated by the CPU into physical addresses in main memory.'
    },
    {
        id: 308,
        subject: 'os',
        difficulty: 'medium',
        question: 'Which of the following is a user-level thread library?',
        options: ['Pthreads', 'Kernel threads', 'Java threads', 'Windows threads'],
        correctAnswer: 0,
        explanation: 'Pthreads (POSIX threads) is a standard API for creating and managing threads. It can be implemented as a user-level library, meaning thread management is done by the application without kernel involvement, though hybrid implementations also exist.'
    },
    {
        id: 309,
        subject: 'os',
        difficulty: 'easy',
        question: 'What is the role of the dispatcher in CPU scheduling?',
        options: ['To select the next process to be executed by the CPU', 'To load the selected process into memory', 'To give control of the CPU to the process selected by the short-term scheduler', 'To create new processes'],
        correctAnswer: 2,
        explanation: 'The dispatcher is the module that gives control of the CPU to the process selected by the short-term scheduler. It involves context switching, switching to user mode, and jumping to the proper location in the user program to resume execution.'
    },
    {
        id: 310,
        subject: 'os',
        difficulty: 'medium',
        question: 'Which memory management technique divides logical memory into fixed-size blocks called pages and physical memory into fixed-size blocks called frames?',
        options: ['Segmentation', 'Paging', 'Swapping', 'Contiguous allocation'],
        correctAnswer: 1,
        explanation: 'Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. It divides logical memory into pages and physical memory into frames of the same size.'
    },
    {
        id: 311,
        subject: 'os',
        difficulty: 'medium',
        question: 'What is the purpose of a semaphore?',
        options: ['To store data temporarily', 'To provide mutual exclusion and synchronize processes', 'To manage file permissions', 'To handle network connections'],
        correctAnswer: 1,
        explanation: 'A semaphore is a signaling mechanism used to control access to shared resources in a concurrent system. It is primarily used for mutual exclusion (ensuring only one process accesses a critical section at a time) and process synchronization.'
    },
    {
        id: 312,
        subject: 'os',
        difficulty: 'hard',
        question: 'What is the optimal page replacement algorithm?',
        options: ['LRU (Least Recently Used)', 'FIFO (First-In, First-Out)', 'LFU (Least Frequently Used)', 'MIN (Optimal/Belady\'s)'],
        correctAnswer: 3,
        explanation: 'The Optimal (MIN or Belady\'s) page replacement algorithm replaces the page that will not be used for the longest period of time in the future. It is theoretically the best but cannot be implemented in practice because it requires future knowledge.'
    },
    {
        id: 313,
        subject: 'os',
        difficulty: 'medium',
        question: 'Which of the following is a mechanism for inter-process communication (IPC)?',
        options: ['Cache memory', 'Virtual memory', 'Pipes', 'Registers'],
        correctAnswer: 2,
        explanation: 'Pipes are a common mechanism for inter-process communication (IPC), allowing two processes to communicate by sending data from one to the other. Other IPC mechanisms include message queues, shared memory, and sockets.'
    },

    // Database Management (DBMS) - 13 questions
    {
        id: 401,
        subject: 'dbms',
        difficulty: 'medium',
        question: 'Which of the following is NOT a type of SQL join?',
        options: ['INNER JOIN', 'OUTER JOIN', 'FULL JOIN', 'MIDDLE JOIN'],
        correctAnswer: 3,
        explanation: 'INNER JOIN, LEFT (OUTER) JOIN, RIGHT (OUTER) JOIN, and FULL (OUTER) JOIN are standard types of SQL joins. "MIDDLE JOIN" is not a recognized SQL join type.'
    },
    {
        id: 402,
        subject: 'dbms',
        difficulty: 'easy',
        question: 'What does ACID stand for in the context of database transactions?',
        options: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Integrity, Data', 'Analysis, Concurrency, Indexing, Design', 'Application, Client, Interface, Database'],
        correctAnswer: 0,
        explanation: 'ACID is an acronym for Atomicity, Consistency, Isolation, and Durability. These are a set of properties that guarantee valid database transactions.'
    },
    {
        id: 403,
        subject: 'dbms',
        difficulty: 'hard',
        question: 'Which normal form eliminates partial dependencies?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correctAnswer: 1,
        explanation: 'Second Normal Form (2NF) eliminates partial dependencies, which occur when a non-prime attribute is functionally dependent on only a part of a candidate key, not the whole key.'
    },
    {
        id: 404,
        subject: 'dbms',
        difficulty: 'medium',
        question: 'What is a "super key" in a relational database?',
        options: ['A key that uniquely identifies a record', 'A set of attributes that uniquely identifies a tuple in a relation', 'A minimal super key', 'A foreign key'],
        correctAnswer: 1,
        explanation: 'A super key is a set of one or more attributes that, taken collectively, can uniquely identify a tuple (row) in a relation (table). It can contain redundant attributes.'
    },
    {
        id: 405,
        subject: 'dbms',
        difficulty: 'easy',
        question: 'Which command is used to retrieve data from a database?',
        options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'],
        correctAnswer: 3,
        explanation: 'The SELECT command is used to query the database and retrieve data that matches specified criteria.'
    },
    {
        id: 406,
        subject: 'dbms',
        difficulty: 'medium',
        question: 'What is the purpose of an index in a database?',
        options: ['To enforce data integrity', 'To speed up data retrieval operations', 'To store large binary objects', 'To define relationships between tables'],
        correctAnswer: 1,
        explanation: 'An index is a database object that provides a quick lookup of data in a column or columns of a table. It significantly speeds up data retrieval operations, especially for large tables.'
    },
    {
        id: 407,
        subject: 'dbms',
        difficulty: 'hard',
        question: 'Which of the following is true about BCNF (Boyce-Codd Normal Form)?',
        options: ['It is always achievable for any relation', 'It is stricter than 3NF', 'It allows partial dependencies', 'It is equivalent to 3NF for all relations'],
        correctAnswer: 1,
        explanation: 'BCNF is a stricter form of 3NF. A relation is in BCNF if for every non-trivial functional dependency X -> Y, X is a superkey. It addresses certain anomalies that 3NF might not catch.'
    },
    {
        id: 408,
        subject: 'dbms',
        difficulty: 'medium',
        question: 'What is a "view" in SQL?',
        options: ['A physical table stored on disk', 'A virtual table based on the result-set of an SQL query', 'A temporary table used for joins', 'A stored procedure'],
        correctAnswer: 1,
        explanation: 'A view is a virtual table whose contents are defined by a query. It does not exist as a separate stored set of data but appears as a table to the user.'
    },
    {
        id: 409,
        subject: 'dbms',
        difficulty: 'easy',
        question: 'Which of the following is a DDL (Data Definition Language) command?',
        options: ['SELECT', 'INSERT', 'CREATE', 'UPDATE'],
        correctAnswer: 2,
        explanation: 'CREATE is a DDL command used to create database objects like tables, views, indexes, etc. SELECT, INSERT, and UPDATE are DML (Data Manipulation Language) commands.'
    },
    {
        id: 410,
        subject: 'dbms',
        difficulty: 'medium',
        question: 'What is "concurrency control" in DBMS?',
        options: ['Ensuring that only one user can access the database at a time', 'Managing simultaneous operations without interfering with each other to maintain data consistency', 'Controlling the flow of data between client and server', 'Optimizing query execution plans'],
        correctAnswer: 1,
        explanation: 'Concurrency control in a DBMS is the process of managing simultaneous operations on a database without compromising the consistency or integrity of the data. It ensures that multiple transactions can run concurrently while maintaining the ACID properties.'
    },
    {
        id: 411,
        subject: 'dbms',
        difficulty: 'medium',
        question: 'Which of the following is used to define the schema of a database?',
        options: ['DML', 'DCL', 'DDL', 'TCL'],
        correctAnswer: 2,
        explanation: 'DDL (Data Definition Language) is used to define and manage the structure of a database, including creating, altering, and dropping tables, indexes, views, etc.'
    },
    {
        id: 412,
        subject: 'dbms',
        difficulty: 'hard',
        question: 'What is the "phantom problem" in database concurrency?',
        options: ['A type of deadlock', 'When a transaction reads data that was not committed by another transaction', 'When a transaction re-executes a query and finds rows that satisfy the query but were not seen before', 'When a transaction updates a row that was deleted by another transaction'],
        correctAnswer: 2,
        explanation: 'The phantom problem occurs when a transaction re-executes a query and finds a set of rows that satisfies a search condition, but these rows were not visible when the query was first executed. This happens due to insertions or deletions by other concurrent transactions.'
    },
    {
        id: 413,
        subject: 'dbms',
        difficulty: 'medium',
        question: 'Which of the following is a characteristic of a weak entity set?',
        options: ['It has a primary key of its own', 'It depends on a strong entity set for its existence and identification', 'It can exist independently', 'It does not have any attributes'],
        correctAnswer: 1,
        explanation: 'A weak entity set depends on a strong (identifying) entity set for its existence and also for its identification. It does not have enough attributes to form a primary key on its own; its primary key is derived from the primary key of the identifying entity set along with its own partial key.'
    },

    // Computer Organization (COA) - 13 questions
    {
        id: 501,
        subject: 'coa',
        difficulty: 'medium',
        question: 'What is the purpose of the Program Counter (PC) in a CPU?',
        options: ['To store the current instruction being executed', 'To store the address of the next instruction to be fetched', 'To store temporary data during calculations', 'To store the result of an arithmetic operation'],
        correctAnswer: 1,
        explanation: 'The Program Counter (PC) is a special-purpose register that holds the memory address of the next instruction to be fetched from memory for execution.'
    },
    {
        id: 502,
        subject: 'coa',
        difficulty: 'easy',
        question: 'Which of the following memory types is the fastest?',
        options: ['Hard Disk Drive', 'RAM', 'Cache Memory', 'Solid State Drive'],
        correctAnswer: 2,
        explanation: 'Cache memory is the fastest memory type, located closest to the CPU, used to store frequently accessed data and instructions to reduce access time to main memory.'
    },
    {
        id: 503,
        subject: 'coa',
        difficulty: 'hard',
        question: 'What is the purpose of a memory-mapped I/O?',
        options: ['To use separate address spaces for memory and I/O devices', 'To use the same address space for memory and I/O devices', 'To allow I/O devices to access main memory directly', 'To manage virtual memory for I/O operations'],
        correctAnswer: 1,
        explanation: 'In memory-mapped I/O, I/O devices are treated as memory locations. The CPU uses the same instructions to access both memory and I/O devices, simplifying the instruction set and control logic.'
    },
    {
        id: 504,
        subject: 'coa',
        difficulty: 'medium',
        question: 'Which addressing mode is used when the operand is explicitly specified in the instruction itself?',
        options: ['Register addressing', 'Direct addressing', 'Immediate addressing', 'Indirect addressing'],
        correctAnswer: 2,
        explanation: 'Immediate addressing mode means that the operand value is contained within the instruction itself, rather than being fetched from a register or memory location.'
    },
    {
        id: 505,
        subject: 'coa',
        difficulty: 'easy',
        question: 'What does ALU stand for?',
        options: ['Arithmetic Logic Unit', 'Array Logic Unit', 'Advanced Logic Unit', 'Address Logic Unit'],
        correctAnswer: 0,
        explanation: 'ALU stands for Arithmetic Logic Unit, a fundamental building block of the CPU that performs arithmetic and bitwise logical operations.'
    },
    {
        id: 506,
        subject: 'coa',
        difficulty: 'medium',
        question: 'What is the main advantage of pipelining in CPU design?',
        options: ['Reduces power consumption', 'Increases instruction throughput', 'Simplifies CPU design', 'Reduces memory access time'],
        correctAnswer: 1,
        explanation: 'Pipelining allows multiple instructions to be in different stages of execution concurrently, thereby increasing the overall instruction throughput (number of instructions completed per unit time), even though the latency of a single instruction might not decrease.'
    },
    {
        id: 507,
        subject: 'coa',
        difficulty: 'hard',
        question: 'In a 4-way set associative cache with a block size of 64 bytes and a total cache size of 16KB, how many sets are there?',
        options: ['64', '128', '256', '512'],
        correctAnswer: 1,
        explanation: 'Total cache size = 16 KB = 16 * 1024 bytes = 16384 bytes.\nBlock size = 64 bytes.\nNumber of blocks = Total cache size / Block size = 16384 / 64 = 256 blocks.\nAssociativity (ways) = 4.\nNumber of sets = Number of blocks / Associativity = 256 / 4 = 64 sets.'
    },
    {
        id: 508,
        subject: 'coa',
        difficulty: 'medium',
        question: 'Which of the following is a control signal used in the execution of an instruction?',
        options: ['Data bus', 'Address bus', 'Read/Write signal', 'Program Counter'],
        correctAnswer: 2,
        explanation: 'The Read/Write (R/W) signal is a control signal generated by the control unit to indicate whether the CPU wants to read data from or write data to memory or an I/O device.'
    },
    {
        id: 509,
        subject: 'coa',
        difficulty: 'easy',
        question: 'What is the purpose of a register in a CPU?',
        options: ['To store large amounts of data permanently', 'To provide high-speed temporary storage for data and instructions being processed by the CPU', 'To connect the CPU to external devices', 'To manage network communication'],
        correctAnswer: 1,
        explanation: 'Registers are small, high-speed storage locations within the CPU that are used to temporarily hold data, instructions, and addresses during program execution.'
    },
    {
        id: 510,
        subject: 'coa',
        difficulty: 'medium',
        question: 'What is the role of the interrupt controller?',
        options: ['To generate interrupts', 'To prioritize and manage multiple interrupt requests from I/O devices', 'To execute interrupt service routines', 'To disable interrupts'],
        correctAnswer: 1,
        explanation: 'An interrupt controller (like the 8259A PIC) is a hardware component that manages interrupt requests from various I/O devices, prioritizes them, and forwards them to the CPU.'
    },
    {
        id: 511,
        subject: 'coa',
        difficulty: 'medium',
        question: 'Which type of memory requires periodic refreshing to retain data?',
        options: ['SRAM', 'DRAM', 'ROM', 'Flash Memory'],
        correctAnswer: 1,
        explanation: 'DRAM (Dynamic Random Access Memory) stores data in capacitors that lose their charge over time, thus requiring periodic refreshing (recharging) to retain the stored data. SRAM (Static RAM) does not require refreshing.'
    },
    {
        id: 512,
        subject: 'coa',
        difficulty: 'hard',
        question: 'In a microprogrammed control unit, what is a "microinstruction"?',
        options: ['A high-level programming instruction', 'A machine language instruction', 'A very low-level instruction that controls the individual components of the CPU', 'An instruction executed by the operating system'],
        correctAnswer: 2,
        explanation: 'A microinstruction is a very low-level instruction that specifies the individual control signals (micro-operations) that need to be activated to perform a specific step in the execution of a machine instruction. A sequence of microinstructions forms a microprogram for a machine instruction.'
    },
    {
        id: 513,
        subject: 'coa',
        difficulty: 'medium',
        question: 'What is the purpose of the instruction register (IR)?',
        options: ['To store the address of the next instruction', 'To store the data fetched from memory', 'To store the instruction currently being executed', 'To store the result of an operation'],
        correctAnswer: 2,
        explanation: 'The Instruction Register (IR) holds the instruction that is currently being executed by the CPU. After an instruction is fetched from memory, it is loaded into the IR for decoding and execution.'
    },

    // Compiler Design (Compiler) - 13 questions
    {
        id: 601,
        subject: 'compiler',
        difficulty: 'medium',
        question: 'Which phase of a compiler groups characters into tokens?',
        options: ['Lexical Analysis', 'Syntax Analysis', 'Semantic Analysis', 'Code Generation'],
        correctAnswer: 0,
        explanation: 'Lexical analysis (or scanning) is the first phase of a compiler, responsible for reading the source code character by character and grouping them into meaningful sequences called tokens.'
    },
    {
        id: 602,
        subject: 'compiler',
        difficulty: 'easy',
        question: 'What is the output of the lexical analyzer?',
        options: ['Parse tree', 'Abstract syntax tree', 'Stream of tokens', 'Intermediate code'],
        correctAnswer: 2,
        explanation: 'The output of the lexical analyzer is a stream of tokens, where each token represents a meaningful unit (like keywords, identifiers, operators, etc.) from the source code.'
    },
    {
        id: 603,
        subject: 'compiler',
        difficulty: 'hard',
        question: 'Which type of parser builds the parse tree from the root down to the leaves?',
        options: ['Bottom-up parser', 'Top-down parser', 'Shift-reduce parser', 'LR parser'],
        correctAnswer: 1,
        explanation: 'Top-down parsers (e.g., recursive descent, LL parsers) construct the parse tree starting from the root (start symbol) and working downwards towards the input symbols (leaves).'
    },
    {
        id: 604,
        subject: 'compiler',
        difficulty: 'medium',
        question: 'What is the role of the symbol table in a compiler?',
        options: ['To store the source code', 'To store information about identifiers (names, types, scope)', 'To store intermediate code', 'To store machine code'],
        correctAnswer: 1,
        explanation: 'The symbol table is a data structure used by the compiler to store information about all identifiers (variables, functions, classes, etc.) encountered in the source program, including their names, types, scope, and memory locations.'
    },
    {
        id: 605,
        subject: 'compiler',
        difficulty: 'easy',
        question: 'Which phase of a compiler checks for type compatibility?',
        options: ['Lexical Analysis', 'Syntax Analysis', 'Semantic Analysis', 'Code Optimization'],
        correctAnswer: 2,
        explanation: 'Semantic analysis checks the source code for semantic errors, such as type mismatches, undeclared variables, incompatible argument types in function calls, etc.'
    },
    {
        id: 606,
        subject: 'compiler',
        difficulty: 'medium',
        question: 'What is "backpatching" in compiler design?',
        options: ['Correcting errors in the source code', 'Filling in addresses of labels and jumps after the code has been generated', 'Optimizing loop structures', 'Translating high-level code to assembly code'],
        correctAnswer: 1,
        explanation: 'Backpatching is a technique used in one-pass code generation (especially for control flow statements like if-else, loops) where the addresses of jump targets are left undefined initially and filled in later when the correct address is known.'
    },
    {
        id: 607,
        subject: 'compiler',
        difficulty: 'hard',
        question: 'Which of the following is a disadvantage of recursive descent parsing?',
        options: ['Cannot handle left recursion', 'Requires a large stack space', 'Difficult to implement', 'Cannot handle ambiguity'],
        correctAnswer: 0,
        explanation: 'Recursive descent parsers cannot directly handle grammars with left recursion (e.g., A -> Aα | β) because it leads to infinite loops. Left recursion must be eliminated from the grammar before using a recursive descent parser.'
    },
    {
        id: 608,
        subject: 'compiler',
        difficulty: 'medium',
        question: 'What is the purpose of intermediate code generation?',
        options: ['To produce machine-dependent code', 'To bridge the gap between high-level source code and low-level machine code, making optimization easier', 'To perform lexical analysis', 'To generate the final executable file'],
        correctAnswer: 1,
        explanation: 'Intermediate code generation creates a machine-independent representation of the source program. This intermediate form is easier to optimize and translate into different target machine codes, making the compiler more portable.'
    },
    {
        id: 609,
        subject: 'compiler',
        difficulty: 'easy',
        question: 'Which of the following is a type of code optimization?',
        options: ['Lexical analysis', 'Dead code elimination', 'Parsing', 'Error handling'],
        correctAnswer: 1,
        explanation: 'Dead code elimination is a common code optimization technique where unreachable or unused code segments are removed from the program to reduce its size and improve performance.'
    },
    {
        id: 610,
        subject: 'compiler',
        difficulty: 'medium',
        question: 'What is the "handle" in a shift-reduce parser?',
        options: ['The next input token', 'A substring that matches the right side of a production and whose reduction is a step in a reverse rightmost derivation', 'The current state of the stack', 'The start symbol of the grammar'],
        correctAnswer: 1,
        explanation: 'In a shift-reduce parser, a "handle" is a substring that matches the right-hand side of a production rule and whose reduction to the left-hand side non-terminal represents a step in the reverse of a rightmost derivation.'
    },
    {
        id: 611,
        subject: 'compiler',
        difficulty: 'medium',
        question: 'Which of the following is an example of a peephole optimization?',
        options: ['Loop optimization', 'Constant folding', 'Strength reduction', 'Common subexpression elimination'],
        correctAnswer: 1,
        explanation: 'Peephole optimization is a local optimization technique that examines a small "peephole" (a few instructions) of the target code to identify and replace inefficient instruction sequences with more efficient ones. Constant folding is an example where expressions with constant operands are evaluated at compile time.'
    },
    {
        id: 612,
        subject: 'compiler',
        difficulty: 'hard',
        question: 'What is the purpose of FIRST and FOLLOW sets in parsing?',
        options: ['To determine the order of tokenization', 'To construct predictive parsing tables and check for grammar ambiguities', 'To optimize the generated code', 'To perform semantic analysis'],
        correctAnswer: 1,
        explanation: 'FIRST and FOLLOW sets are crucial in top-down parsing (especially LL(1) parsers). FIRST sets help determine which production to use for a given non-terminal and input token, while FOLLOW sets help determine when to apply epsilon productions and for error recovery.'
    },
    {
        id: 613,
        subject: 'compiler',
        difficulty: 'medium',
        question: 'What is the difference between a compiler and an interpreter?',
        options: ['A compiler translates code line by line, while an interpreter translates the entire code at once.', 'A compiler produces an executable file, while an interpreter executes code directly without producing an executable.', 'A compiler is used for low-level languages, an interpreter for high-level languages.', 'There is no significant difference.'],
        correctAnswer: 1,
        explanation: 'A compiler translates the entire source code into machine code (or an intermediate form) before execution, producing an executable file. An interpreter executes the source code line by line, translating and executing each statement sequentially without generating a standalone executable.'
    },

    // Theory of Computation (TOC) - 13 questions
    {
        id: 701,
        subject: 'toc',
        difficulty: 'medium',
        question: 'Which of the following describes a language accepted by a Finite Automaton (FA)?',
        options: ['Context-Sensitive Language', 'Context-Free Language', 'Regular Language', 'Recursively Enumerable Language'],
        correctAnswer: 2,
        explanation: 'Finite Automata (both DFA and NFA) accept precisely the class of Regular Languages.'
    },
    {
        id: 702,
        subject: 'toc',
        difficulty: 'easy',
        question: 'What is the Chomsky Hierarchy used for?',
        options: ['To classify programming languages', 'To classify formal languages based on their generative power', 'To classify types of automata', 'To classify types of grammars'],
        correctAnswer: 1,
        explanation: 'The Chomsky Hierarchy classifies formal languages into four types (Type 0, Type 1, Type 2, Type 3) based on their generative power and the type of grammar/automaton required to recognize them.'
    },
    {
        id: 703,
        subject: 'toc',
        difficulty: 'hard',
        question: 'Which of the following is undecidable?',
        options: ['The Halting Problem', 'Checking if a string belongs to a regular language', 'Checking if a string belongs to a context-free language', 'Checking if two DFAs are equivalent'],
        correctAnswer: 0,
        explanation: 'The Halting Problem (determining whether an arbitrary program will halt or run forever on a given input) is a classic example of an undecidable problem, meaning no algorithm can solve it for all possible inputs.'
    },
    {
        id: 704,
        subject: 'toc',
        difficulty: 'medium',
        question: 'What kind of automaton recognizes Context-Free Languages?',
        options: ['Finite Automaton', 'Pushdown Automaton', 'Turing Machine', 'Linear Bounded Automaton'],
        correctAnswer: 1,
        explanation: 'Pushdown Automata (PDA) are more powerful than Finite Automata and are capable of recognizing Context-Free Languages (CFLs) due to their ability to use a stack.'
    },
    {
        id: 705,
        subject: 'toc',
        difficulty: 'easy',
        question: 'What is the pumping lemma for regular languages used for?',
        options: ['To prove that a language is regular', 'To prove that a language is NOT regular', 'To construct a DFA for a given language', 'To simplify a regular expression'],
        correctAnswer: 1,
        explanation: 'The pumping lemma for regular languages is a tool used to prove that certain languages are NOT regular by showing that they violate the pumping property.'
    },
    {
        id: 706,
        subject: 'toc',
        difficulty: 'medium',
        question: 'Which of the following is equivalent to a Turing Machine in terms of computational power?',
        options: ['Finite Automaton', 'Pushdown Automaton', 'Lambda Calculus', 'Context-Free Grammar'],
        correctAnswer: 2,
        explanation: 'Lambda Calculus is a universal model of computation, equivalent in power to a Turing Machine. Other equivalent models include recursive functions and Post production systems.'
    },
    {
        id: 707,
        subject: 'toc',
        difficulty: 'hard',
        question: 'If a language L is recursively enumerable, then its complement L\' is:',
        options: ['Also recursively enumerable', 'Recursive', 'Not necessarily recursively enumerable', 'Context-free'],
        correctAnswer: 2,
        explanation: 'If a language L is recursively enumerable, its complement L\' is not necessarily recursively enumerable. However, if both L and L\' are recursively enumerable, then L is recursive (decidable).'
    },
    {
        id: 708,
        subject: 'toc',
        difficulty: 'medium',
        question: 'What is the primary difference between a DFA and an NFA?',
        options: ['DFA has a finite number of states, NFA does not.', 'DFA can have epsilon transitions, NFA cannot.', 'For every state and input symbol, a DFA has exactly one transition, while an NFA can have zero, one, or multiple transitions.', 'DFA is more powerful than NFA.'],
        correctAnswer: 2,
        explanation: 'The key difference is in their transition functions. In a DFA, for each state and input symbol, there is exactly one next state. In an NFA, there can be zero, one, or multiple next states, and it can also have epsilon (empty string) transitions.'
    },
    {
        id: 709,
        subject: 'toc',
        difficulty: 'easy',
        question: 'Which of the following is a regular expression for the language of all strings over {a, b} containing at least one \'a\'?',
        options: ['(a+b)*', '(a+b)*a(a+b)*', 'a*', 'b*a'],
        correctAnswer: 1,
        explanation: 'The regular expression (a+b)*a(a+b)* matches any string that contains at least one \'a\'. (a+b)* matches any string, a* matches zero or more \'a\'s, and b*a matches strings ending with \'a\' preceded by zero or more \'b\'s.'
    },
    {
        id: 710,
        subject: 'toc',
        difficulty: 'medium',
        question: 'What is the purpose of the pumping lemma for context-free languages?',
        options: ['To prove that a language is context-free', 'To prove that a language is NOT context-free', 'To design a PDA for a given language', 'To convert a context-free grammar to Chomsky Normal Form'],
        correctAnswer: 1,
        explanation: 'Similar to the pumping lemma for regular languages, the pumping lemma for context-free languages is used to prove that certain languages are NOT context-free.'
    },
    {
        id: 711,
        subject: 'toc',
        difficulty: 'medium',
        question: 'Which type of grammar corresponds to a Turing Machine?',
        options: ['Regular Grammar', 'Context-Free Grammar', 'Context-Sensitive Grammar', 'Unrestricted Grammar'],
        correctAnswer: 3,
        explanation: 'Unrestricted Grammars (Type 0 grammars) are the most powerful type of grammar in the Chomsky Hierarchy and correspond to Turing Machines. They can generate all recursively enumerable languages.'
    },
    {
        id: 712,
        subject: 'toc',
        difficulty: 'hard',
        question: 'The language $L = \{a^n b^n c^n | n \ge 1\}$ is:',
        options: ['Regular', 'Context-Free', 'Context-Sensitive', 'Recursively Enumerable but not Context-Sensitive'],
        correctAnswer: 2,
        explanation: 'The language $L = \{a^n b^n c^n | n \ge 1\}$ is a classic example of a language that is Context-Sensitive but not Context-Free. Neither a Finite Automaton nor a Pushdown Automaton has enough memory to count three independent sets of characters.'
    },
    {
        id: 713,
        subject: 'toc',
        difficulty: 'medium',
        question: 'What is a "recursive language"?',
        options: ['A language recognized by an NFA', 'A language for which there exists a Turing Machine that halts on all inputs (both acceptance and rejection)', 'A language generated by a context-free grammar', 'A language that can be described by a regular expression'],
        correctAnswer: 1,
        explanation: 'A recursive language (or decidable language) is a language for which there exists a Turing Machine that will always halt in a finite amount of time for any given input string, either accepting or rejecting it.'
    },

    // Discrete Mathematics (DM) - 13 questions
    {
        id: 801,
        subject: 'dm',
        difficulty: 'medium',
        question: 'What is the negation of the statement "All birds can fly"?',
        options: ['No birds can fly', 'Some birds cannot fly', 'All birds cannot fly', 'Some birds can fly'],
        correctAnswer: 1,
        explanation: 'The negation of "All A are B" is "Some A are not B". Therefore, the negation of "All birds can fly" is "Some birds cannot fly".'
    },
    {
        id: 802,
        subject: 'dm',
        difficulty: 'easy',
        question: 'If A = {1, 2, 3} and B = {3, 4, 5}, what is A $\cup$ B?',
        options: ['{3}', '{1, 2, 3, 4, 5}', '{1, 2, 4, 5}', '{ }'],
        correctAnswer: 1,
        explanation: 'The union of two sets A and B, denoted A $\cup$ B, is the set of all elements that are in A, or in B, or in both. So, A $\cup$ B = {1, 2, 3, 4, 5}.'
    },
    {
        id: 803,
        subject: 'dm',
        difficulty: 'hard',
        question: 'How many distinct permutations can be made from the letters of the word "MISSISSIPPI"?',
        options: ['34650', '69300', '11!', '3465'],
        correctAnswer: 0,
        explanation: 'The word MISSISSIPPI has 11 letters. M (1), I (4), S (4), P (2).\nThe number of distinct permutations is given by n! / (n1! * n2! * ... * nk!), where n is the total number of letters and ni is the frequency of each distinct letter.\nSo, 11! / (1! * 4! * 4! * 2!) = 39916800 / (1 * 24 * 24 * 2) = 39916800 / 1152 = 34650.'
    },
    {
        id: 804,
        subject: 'dm',
        difficulty: 'medium',
        question: 'What is the power set of the set A = {a, b}?',
        options: ['{{a}, {b}}', '{{ }, {a}, {b}}', '{{ }, {a}, {b}, {a, b}}', '{{a, b}}'],
        correctAnswer: 2,
        explanation: 'The power set of a set A is the set of all subsets of A, including the empty set and A itself. For A = {a, b}, the subsets are { }, {a}, {b}, and {a, b}.'
    },
    {
        id: 805,
        subject: 'dm',
        difficulty: 'easy',
        question: 'Which of the following is a tautology?',
        options: ['P $\land$ $\neg$P', 'P $\lor$ $\neg$P', 'P $\rightarrow$ Q', 'P $\land$ Q'],
        correctAnswer: 1,
        explanation: 'A tautology is a propositional formula that is true under any truth assignment of its propositional variables. P $\lor$ $\neg$P (P or not P) is always true, regardless of the truth value of P.'
    },
    {
        id: 806,
        subject: 'dm',
        difficulty: 'medium',
        question: 'In graph theory, what is a "walk" where no edge is repeated?',
        options: ['Path', 'Trail', 'Cycle', 'Circuit'],
        correctAnswer: 1,
        explanation: 'A trail is a walk in which no edge is repeated. A path is a trail in which no vertex is repeated (except possibly the start and end vertices if it\'s a cycle).'
    },
    {
        id: 807,
        subject: 'dm',
        difficulty: 'hard',
        question: 'What is the maximum number of edges in a simple graph with n vertices?',
        options: ['n(n-1)', 'n(n-1)/2', 'n^2', '2n'],
        correctAnswer: 1,
        explanation: 'In a simple graph (no loops or multiple edges between the same pair of vertices), the maximum number of edges occurs in a complete graph. Each vertex can be connected to (n-1) other vertices, and since each edge connects two vertices, we divide by 2: n(n-1)/2.'
    },
    {
        id: 808,
        subject: 'dm',
        difficulty: 'medium',
        question: 'If a function f: A $\rightarrow$ B is both injective (one-to-one) and surjective (onto), it is called:',
        options: ['Invertible', 'Bijective', 'Composition', 'Recursive'],
        correctAnswer: 1,
        explanation: 'A function that is both injective (one-to-one) and surjective (onto) is called a bijective function or a bijection. Bijective functions are precisely those that have inverse functions.'
    },
    {
        id: 809,
        subject: 'dm',
        difficulty: 'easy',
        question: 'What is the base of a binary number system?',
        options: ['8', '10', '2', '16'],
        correctAnswer: 2,
        explanation: 'The binary number system (base-2) uses only two digits: 0 and 1.'
    },
    {
        id: 810,
        subject: 'dm',
        difficulty: 'medium',
        question: 'How many subsets are there of a set with 5 elements?',
        options: ['5', '10', '25', '32'],
        correctAnswer: 3,
        explanation: 'For a set with n elements, the number of subsets (the size of its power set) is 2^n. For a set with 5 elements, the number of subsets is 2^5 = 32.'
    },
    {
        id: 811,
        subject: 'dm',
        difficulty: 'medium',
        question: 'What is the sum of the degrees of all vertices in a graph?',
        options: ['Twice the number of vertices', 'Twice the number of edges', 'Number of vertices minus one', 'Number of edges plus one'],
        correctAnswer: 1,
        explanation: 'The Handshaking Lemma states that the sum of the degrees of all vertices in any finite graph is equal to twice the number of edges. This is because each edge contributes exactly two to the sum of degrees (one for each of its endpoints).'
    },
    {
        id: 812,
        subject: 'dm',
        difficulty: 'hard',
        question: 'A planar graph has V vertices and E edges. If it is connected, what is the relationship between V, E, and F (number of faces)?',
        options: ['V - E + F = 1', 'V - E + F = 2', 'V + E + F = 2', 'V + E - F = 1'],
        correctAnswer: 1,
        explanation: 'Euler\'s formula for connected planar graphs states that V - E + F = 2, where V is the number of vertices, E is the number of edges, and F is the number of faces (regions, including the outer unbounded region).'
    },
    {
        id: 813,
        subject: 'dm',
        difficulty: 'medium',
        question: 'Which of the following logical connectives is equivalent to P $\rightarrow$ Q?',
        options: ['$\neg$P $\lor$ Q', 'P $\land$ $\neg$Q', '$\neg$(P $\lor$ Q)', 'P $\lor$ Q'],
        correctAnswer: 0,
        explanation: 'The implication P $\rightarrow$ Q (If P then Q) is logically equivalent to $\neg$P $\lor$ Q (not P or Q). This is a fundamental equivalence in propositional logic.'
    },

    // Add more questions for other subjects as needed to reach 100+
    // For now, let's ensure we have enough for the initial request.
    // We have 15 (DSA) + 13 (Networks) + 13 (OS) + 13 (DBMS) + 13 (COA) + 13 (Compiler) + 13 (TOC) + 13 (DM) = 106 questions.
];
