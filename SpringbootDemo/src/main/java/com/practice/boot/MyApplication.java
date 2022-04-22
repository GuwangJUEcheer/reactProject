package com.practice.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//代表这个是一个springboot的应用
@SpringBootApplication(scanBasePackages="com.practice.boot")
public class MyApplication {
public static void main(String[] args) {
	SpringApplication.run(MyApplication.class,args);
}
}
