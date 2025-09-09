def encrypt(original_text, shift_amount):
    encrypted_text = ""
    for letter in original_text:
        if letter in alphabet:
            position = alphabet.index(letter)
            new_position = (position + shift_amount) % 26
            encrypted_text += alphabet[new_position]
        else:
            encrypted_text += letter
    print(f"The encoded text is {encrypted_text}")