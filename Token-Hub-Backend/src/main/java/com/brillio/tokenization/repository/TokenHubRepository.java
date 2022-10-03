package com.brillio.tokenization.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brillio.tokenization.entity.TokenData;

@Repository
public interface TokenHubRepository extends JpaRepository<TokenData, String> {

}
