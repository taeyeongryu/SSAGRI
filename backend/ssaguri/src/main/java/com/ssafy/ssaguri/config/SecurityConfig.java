package com.ssafy.ssaguri.config;


import com.ssafy.ssaguri.util.filter.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity //Spring Security를 웹 애플리케이션에서 활성화하도록 지시
@Configuration //이 클래스 내에서 Spring Bean을 정의하고 설정을 구성
public class SecurityConfig {

    @Autowired
    public SecurityConfig() {

    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // common settings
                .httpBasic().disable()
                .csrf().disable()   //CSRF 토큰을 사용하지 않도록 설정
                .cors()             //CORS 활성화
                .and()
                .sessionManagement()//세션 관리 설정
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) //세션 생성 X, 요청 상태 추적하지 않음
                .and()
                //jwt Filter Setting
                .addFilterBefore(new JwtFilter(), UsernamePasswordAuthenticationFilter.class)
        ;

        return http.build();
    }

}
