/**
 * 
 */
package com.nttdata.atlantis_client.security;

import java.security.MessageDigest;

/**
 * @author stefan.cristian
 *
 */
public class MD5Encode {
	/**
	 * Encodes the sent string
	 * 
	 * @param password
	 *            the string to encode
	 * @return the encoded string
	 */
	public String encode(String password) {
		String encoding = "";
		try {
			MessageDigest m = MessageDigest.getInstance("MD5");
			m.update(password.getBytes("UTF8"));
			byte[] s = m.digest();
			for (int i = 0; i < s.length; i++) {
				encoding += Integer.toHexString((0x000000ff & s[i]) | 0xffffff00).substring(6);
			}

		} catch (Exception e) {
			System.out.println("Encoding exception");
			return encoding;
		}
		return encoding;
	}
}
