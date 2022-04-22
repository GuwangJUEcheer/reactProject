package com.practice.boot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.practice.boot.bean.User;

@Configuration//告诉springboot这是一个配置类
public class Config {
@Bean//给容器增加组件 方法名是id 返回类型是组件类型 返回值是组件在容器中的实例
//外部无论调用多少次只执行一次
public User User01() {
	return new User(1,"AA");
}
}

