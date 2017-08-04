package com.nttdata.atlantis_client.security;

import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	public User findByEmail(String arg0) throws ClientProtocolException, IOException, ParseException, JSONException {
		HttpClient httpclient = HttpClientBuilder.create().build();
		HttpGet httpget = new HttpGet("http://10.224.15.195:9080/atlantis/users?email=" + arg0);
		httpget.setHeader("pass-key", "1234567890qwerty");
		HttpResponse response = httpclient.execute(httpget);
		HttpEntity resEntity = response.getEntity();
		JSONObject obj = new JSONObject(EntityUtils.toString(resEntity));
		User user = new User();
		user.setEmail((String) obj.get("email"));
		user.setPassword((String) obj.get("password"));
		user.setRole((String) obj.get("role"));
		user.setConfirmed(obj.getBoolean("confirmed"));
		user.setId(obj.getLong("userId"));
		user.setPlaceId(obj.getLong("placeId"));
		return user;
	}

}
