/**
 * Next, we're going to build a queue which is complementary to stacks. The
 * difference is that this time you remove items from the start of the queue
 * rather than the end. Removing the oldest items rather than the most recent.
 *
 * Again, because this limits the amount of functionality, there are many
 * different ways of implementing it. A good way might be to use a linked list
 * which we will see later.
 */

export default class Queue {
  /**
   * Again, our queue is using a JavaScript array as a list rather than memory.
   */

  constructor() {
    this.list = [];
    this.length = 0;
  }

  /**
   * Similar to stacks we're going to define two functions for adding and
   * removing items from the queue. The first is "enqueue".
   *
   * This will push values to the end of the list.
   */

  push(value) {
    this.length++;
    this.list.push(value);
  }

  /**
   * Next is "dequeue", instead of removing the item from the end of the list,
   * we're going to remove it from the start.
   */

  shift() {
    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    // Shift the first item off the start of the list and return the value.
    this.length--;
    return this.list.shift();
  }

  /**
   * Same as stacks we're going to define a "peek" function for getting the next
   * value without removing it from the queue.
   */

  peek() {
    return this.list[0];
  }
}

/**
 * The important thing to note here is that because we used a list to back our
 * queue it inherits the performance of "shift" which is linear O(N) "OKAY."
 *
 * Later we'll see linked lists that will allow us to implement a much faster
 * Queue.
 */
