/*
*
* 现在的调查问卷越来越多了，所以出现了很多人恶意刷问卷的情况，已知某问卷需要填写名字，如果名字仅由大小写英文字母组成且长度不超过10，则我们认为这个名字是真实有效的，否则就判定为恶意填写问卷。

请你判断出由多少有效问卷（只要名字是真实有效的，就认为问卷有效）。
*
*
*
*
* 输入描述
输入第一行包含一个正整数n，表示收到的问卷数量。(1<=n<=2000)

接下来有n行，每行有一个由大小写英文字母，数字，下划线组成的字符串，分别表示一份问卷的名字，字符串长度不超过100。

输出描述
输出只有一个整数，表示有效问卷数量。


样例输入
5
BA
aOWVXARgUbJDG
OPPCSKNS
HFDJEEDA
ABBABBBBAABBBAABAAA
样例输出
3
* */

/*
*
*
* 不及格的小A（Web）
时间限制： 3000MS
内存限制： 786432KB
题目描述：
   小A的英语考了个不及格，老师很生气，并且发现他英语的语法几乎全错！于是老师决定好好教教他英语语法。

   老师想先从句子结构开始教他。一个句子至少需要包含主谓结构，即主语和谓语，并且主语在前，谓语在后。有些句子会在谓语后面加上宾语。避免复杂，本题中句子的顺序严格按照主语-谓语-宾语的顺序（即无宾语前置和倒装等情况）。

   老师给了小A三张单词表，分别是主语单词表、谓语单词表和宾语单词表。老师要让小A用这些单词表中的单词来造句，并且规定：谓语有且仅有一个单词，主语和宾语可以包含任意个单词（主语不可为空）。老师暂时不想让小A造出能保证意思通顺的句子，他只想让小A能够学会基本的句子结构就行。

   现在，小A根据这些单词造了m条句子，现在假设你是老师，你需要判断每条句子是否符合上述句子结构。



输入描述
  第一行三个正整数n1,n2,n3，分别表示主语、谓语、宾语单词表的单词数；

  第二行包含n1个单词，单词仅由小写英文字母组成，每两个单词之间有一个空格，单词长度不超过10；

  第三行包含n2个单词，其他格式同上；

  第四行包含n3个单词，其他格式同上；

  第五行一个正整数m；

  接下来m行，每行一个句子。句子由若干单词（至少一个）组成，并且保证出现的单词都在上面的单词表内。每两个单词之间一个空格隔开。

  数据保证一个单词最多只可做一种句子成分。即每个单词仅会出现在一个单词表上。

  1≤n1,n2,n3≤1000,1≤m≤20,1≤句子单词数≤10

输出描述
对于每条句子，如果其符合句子结构，输出一行“YES”（不含引号），否则输出一行“NO”（不含引号）。


样例输入
3 3 3
i you he
am is are
yours his hers
5
i am yours
you is his
he are hers yours
i am am yours
is his
样例输出
YES
YES
YES
NO
NO
*
* */
