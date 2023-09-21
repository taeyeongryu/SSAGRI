package com.ssafy.ssagri.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

/**
 * 이메일에 관련된 설정
 */
@Configuration
public class EmailConfig {

    @Value("${spring.mail.smtp.port}")
    private int port;

    @Value("${spring.mail.smtp.socketfactory.port}")
    private int socketPort;

    @Value("${spring.mail.smtp.auth}")
    private boolean auth;

    @Value("${spring.mail.smtp.starttls.enable}")
    private boolean starttls;

    @Value("${spring.mail.smtp.starttls.required}")
    private boolean starttls_required;

    @Value("${spring.mail.smtp.socketfactory.fallback}")
    private boolean fallback;

    @Value("${spring.mail.admin.id}")
    private String id;

    @Value("${spring.mail.admin.password}")
    private String password;

    @Bean
    public JavaMailSender javaMailService() {
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        javaMailSender.setHost("smtp.gmail.com");
        javaMailSender.setUsername(id);
        javaMailSender.setPassword(password);
        javaMailSender.setPort(port);
        javaMailSender.setJavaMailProperties(getMailProperties());
        javaMailSender.setDefaultEncoding("UTF-8");
        return javaMailSender;
    }
    private Properties getMailProperties()
    {
        Properties pt = new Properties();
        pt.put("mail.smtp.socketFactory.port", socketPort);
        pt.put("mail.smtp.auth", auth);
        pt.put("mail.smtp.starttls.enable", starttls);
        pt.put("mail.smtp.starttls.required", starttls_required);
        pt.put("mail.smtp.socketFactory.fallback",fallback);
        pt.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        return pt;
    }
}