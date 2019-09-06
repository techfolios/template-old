---
layout: project
type: project
image: images/babel.jpg
title: Infinite Monkey Theorem
permalink: projects/imt
# All dates must be YYYY-MM-DD format!
date: 2018-11-01
labels:
  - Java
  - Discrete Mathematics
  - Probability
summary: Implimented the Infinite Monkey Theorem in Java.
---

<img class="ui medium right floated rounded image" src="../images/vacay-home-page.png">

This small side project stemmed from pure curiousity. During my time being involved in ICS 141 (Discrete Mathematics for Computer Science), I gained familiarity with the concept of sets. Sets are a big part of discrete math, and there are many different insights one can gain from observing and working with their properites. 

In 141, we learned about probability, for example the probability of a certain event occuring with particular conditions. Related to this, we learned about strings, and how many different strings can be formed using a certain set of characters (for example the set containing the alphabet, or set containing numbers). 

Before taking ICS 141, I had come across this idea known as "the Infinite Monkey Theorem". It is the idea that if a monkey sat at a keyboard and typed random keys (since a monkey cannot read letters), eventually the monkey will have typed some kind of readible English, perhaps a basic sentence. Given enough time (up to infinity), the monkey will have typed everything that has ever been known, even complex works such as Shakespeare. 

However, the math behind this actually shows that typing certain works, like a chapter book, is extremely unlikely, to the point where it would take millions upon millions of times the universe's existance to actually accomplish. For example, say we used the set of alphabetical letters as well as the space character (26 + 1 = 27). The chance to type "dog" would be 1 out of (27 * 27 * 27). Or, simplified, a 1 in 19683 chance of occuring. The more characters you require, the more that this number shrinks absurdly low. 

During my time ICS 141 and ICS 211, I decided to merge what I've learned in both classes. In this case, to try and code the IMT in Java, to see if I could print anything legible using random characters. To my delight, I managed to create a simple program that simulated this concept. The three elements behind this project were the set of alphabetical characters (including space), an int to count how many characters I've ran through, and a timer.

Here is the code:

```js
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class InfiniteMonkey {

  static char[] alphabet = "abcdefghijklmnopqrstuvwxyz ".toCharArray();


  public static void main(String [] args) {

    displayArrayContents();
    IMT();

  }


  private static void displayArrayContents() {

    int indexCount = 1;

    for (int i = 0; i < alphabet.length; i++) {

      System.out.println(indexCount + "." + alphabet[i]);
      indexCount++;
    }
  }


  public static void IMT() {

    int count = 0;

    //if the word "kayak" is found, break, and print count as well
    //keep in mind that the sequence "kayak" has a 1/27^5 probability of generating (very slim)
    String word = " kayak";
    StringBuilder sb = new StringBuilder();

    long startTime = System.nanoTime();
    
    
    while (true) {


      char letter = alphabet[new Random().nextInt(alphabet.length)];
      sb.append(letter);

      System.out.println("    " + letter);

      count++;



      //We never want our String Builder word to be bigger than our original word because then obvi they wont match.
      if(sb.length() == word.length()+1) {

        //delete the first char so that we are always adding new chars and changing our sb
        sb.deleteCharAt(0);
      }

      if(sb.toString().equals(word)) {
        long endTime = System.nanoTime();
        long runTime = (endTime - startTime);
        System.out.println();
        System.out.println("Count: " + count);
        System.out.println("Time elapsed: " + (runTime) + " nanoseconds or " 
            + TimeUnit.SECONDS.convert(runTime, TimeUnit.NANOSECONDS) + " seconds (truncated)" );
        break;
      }

    }


  }


}

```

I will also include screenshots of things I have printed using this program to highlight some of the probabilities:

<div class="ui small rounded images">
  <img class="ui image" src="../images/lee.png">
  "lee"
  
  <img class="ui image" src="../images/roman.png">
  "roman"
  
  <img class="ui image" src="../images/toga.png">
  "toga"
  
  <img class="ui image" src="../images/a few.png">
  "a few"
  
  <img class="ui image" src="../images/ooooo.png">
  "ooooo"
  
</div>


It is interesting to see the time it took for the computer to print these words. Keep in mind that a computer also "types" at a speed many many times faster than a monkey. These were some of the longest words I could generate. When I attempted to try a sentence, my computer ran for about an hour or so before I called it quits. 

Overall, this was an interesting little side project. It shows how mathematics can be applied to a particular situation, and how mathematics can be demonstrated through code.

Note: The title image is from the short story "The Library of Babel" by Jorge Luis Borges. I chose it because it is similar in concept to the Infinite Monkey Theorem. Basically the library is an infinite library filled with an infinite amount of books. The books contain all combinations of letters, meaning that everything that is known and can be known can be found in the library. I did read the story and found it interesting. I would recommend it to anyone interested in mind-twisting stories such as these.

<div class="ui small rounded images">
  <img class="ui image" src="../images/library.jpg">
 
 </div>
 
Source: <a href="https://github.com/theVacay/vacay"><i class="large github icon"></i>theVacay/vacay</a>

