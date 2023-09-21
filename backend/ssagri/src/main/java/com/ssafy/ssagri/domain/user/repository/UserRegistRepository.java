package com.ssafy.ssagri.domain.user.repository;

import com.ssafy.ssagri.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRegistRepository extends JpaRepository<User, Long> {

    @Query("SELECT COUNT(u) > 0 FROM User u WHERE u.nickname = :nickname")
    boolean isNicknameExists(@Param("nickname") String nickname);

    @Query("SELECT COUNT(u) > 0 FROM User u WHERE u.email = :email")
    boolean isEmailExists(@Param("email") String email);



}
