def decode(message_file):
    """Decodes the message from the given file.

    Args:
        message_file: The path to the message file.

    Returns:
        The decoded message as a string.
    """

    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Store the word-number pairs in a dictionary
    message_dict = {}
    for line in lines:
        number, word = line.strip().split()  # Split into number and word
        number = int(number)  # Convert number to integer
        message_dict[number] = word

    # Generate triangular numbers and extract corresponding words
    current_number = 1
    decoded_message = []
    while current_number in message_dict:
        decoded_message.append(message_dict[current_number])
        current_number += len(decoded_message)

    return " ".join(decoded_message)


response = decode("message_file.txt")
print(response)