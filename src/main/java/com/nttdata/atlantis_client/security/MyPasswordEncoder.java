/**
 * 
 */
package com.nttdata.atlantis_client.security;

import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * @author stefan.cristian
 *
 */
public class MyPasswordEncoder implements PasswordEncoder {

	/**
	 * Encodes the sent string
	 * 
	 * @param arg0
	 *            the string to encode
	 * @return the encoded string
	 */
	@Override
	public String encode(CharSequence arg0) {
		MD5Encode md5 = new MD5Encode();
		return md5.encode("" + arg0);
	}

	/**
	 * Checks if the two string are the same
	 * 
	 * @param arg0
	 *            the encoded string
	 * @param arg1
	 *            the string in plain text
	 * @return true if the two string are the same, false otherwise
	 */
	@Override
	public boolean matches(CharSequence arg0, String arg1) {
		MD5Encode md5 = new MD5Encode();
		return (md5.encode("" + arg0).equals(arg1)) ? true : false;
	}

}
