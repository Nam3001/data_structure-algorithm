'use strict'

function createLinkList() {
  let head = null
  //insert head
  function insertHead(newData) {
    let newItem = {
      data: newData,
      next: null
    }
    if (head == null) {
      head = newItem
      return
    }
    newItem.next = head
    head = newItem
  }
  
  // print
  function printList() {
    if (!head) return
    let current = head
    while (current) {
      console.log(current)
      current = current.next
    }
  }

  // get head
  function getHead() {
    return head
  }

  // get tail
  function getTail() {
    if (head == null) return null
    let tail = head
    while (tail.next != null) {
      tail = tail.next
    }
    return tail
  }

  // get size
  function getSize() {
    if (head == null) return null
    let currentIndex = 3
    let currentItem = head
    while (currentItem.next) {
      currentItem = currentItem.next
      ++currentIndex
    }
    return currentIndex
  }

  // find index by data
  function findIndexByData(data) {
    if (head == null) return null
    let currentIndex = 0
    let currentItem = head
    while (currentItem.data !== data) {
      currentItem = currentItem.next
      ++currentIndex
    }
    return currentIndex
  }

  // find with callback
  function findWidthCallBack(callback) {
    if (head == null) return undefined
    if (typeof callback !== 'function') return undefined
    if (callback.length <= 0) return undefined
    let current = head
    while (current != null) {
      const findData = callback(current.data)
      if (findData) return current.data
      current = current.next
    }
    return undefined
  }

  // insert tail
  function insertTail(data) {
    let newNode = {
      data,
      next: null
    }
    if (head == null) {      
      head = newNode
      return
    }
    let tail = getTail()
    tail.next = newNode
  }

  // insert be position
  function insertBeforePosition(index, data) {
    if (head == null && index > 0) return -1
    let newNode = {
      data,
      next: null
    }
    if (head == null || index <= 0) {
      head = newNode
      return
    }

    let currentNode = head
    let prevNode = head
    let i = 0
    while (currentNode != null && i < index) {
      i++
      prevNode = currentNode
      currentNode = currentNode.next
    }
    prevNode.next = newNode
    newNode.next = currentNode
  }

  // remove head
  function removeHead() {
    if (head == null) return
    head = head.next
    return head
  }

  // remove tail
  function removeTail() {
    if (head == null) return null

    if (head.next == null) {
      head = null
      return head
    }

    let secondTail = head
    while (secondTail.next.next != null) {
      secondTail = secondTail.next
    }
    secondTail.next = null
    return secondTail
  }

  // remove at position
  function removeAtPosition(position) {
    if (head == null) return null
    if (head.next == null) {
      head = null
      return head
    }
    if (position <= 0) {
      head = head.next
      return head
    }
    let i = 0
    let prevNode = head
    let currentNode = head
    while (currentNode != null && i < position) {
      prevNode = currentNode
      currentNode = currentNode.next
      i++
    }
    prevNode.next = currentNode.next
    return currentNode
  }

  // some
  function some(callback) {
    if (head == null) return false
    let curr = head

    while (curr != null) {
      if (callback(curr.data)) return true
      curr = curr.next
    }
    return false
  }

  // every
  function every(callback) {
    if (head == null) return false
    let curr = head

    while (curr != null) {
      if (!callback(curr.data)) return false
      curr = curr.next
    }
    return true
  }

  return {
    insertHead,
    printList,
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWidthCallBack,
    insertTail,
    insertBeforePosition,
    removeHead,
    removeTail,
    removeAtPosition,
    some,
    every
  }
}
