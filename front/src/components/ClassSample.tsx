import React, { Component } from 'react'
import { number } from '../config';

export class ClassSample {
  run(){
    const config = number;
    console.log("ClassSample", number)
  }
  protected squeeze(){
    console.log("ClassSample squeeze")
  }
  generate(){
    const article = {
      id: "1234",
      title: "サンプルタイトル",
      desc: "説明文"
    }
    const item = this.generateItem(article);
    return item;
  }
  generateItem(article: any){
    const now = Date.now();
    article.now = now;
    return article;
  }
}

new ClassSample();