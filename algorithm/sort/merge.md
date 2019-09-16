# 归并排序

## TL;DR

归并排序使用分而治之的思想，以折半的方式来递归/迭代排序元素，利用空间来换时间，做到了时间复杂度 O(n·log(n)) 的同时保持了稳定。

## 基本实现

<<< @/algorithm/sort/code/merge.js