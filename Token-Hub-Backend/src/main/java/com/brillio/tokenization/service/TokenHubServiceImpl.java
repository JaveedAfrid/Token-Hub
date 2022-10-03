package com.brillio.tokenization.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brillio.tokenization.entity.TokenData;
import com.brillio.tokenization.repository.TokenHubRepository;

@Service
public class TokenHubServiceImpl implements TokenHubService {

	@Autowired
	private TokenHubRepository tokenHubRepository;

	@Override
	public void save(TokenData tokenData) {
		// TODO Auto-generated method stub
		tokenHubRepository.save(tokenData);

	}

}
