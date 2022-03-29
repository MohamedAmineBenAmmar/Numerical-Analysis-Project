from gram_schmidt import GramSchmidt

# Calling the class constructor
gram_schmidt = GramSchmidt(filename="data.csv", sep=" ")

# Extracting the data from the input file
gram_schmidt.extract_data()

# Configuring the matrices, A (matrix) and b (vector)
gram_schmidt.configure_matrices()

# print()
# print("Data extracted data from the file:")
# print(gram_schmidt.data)

print()
print("The A Matrix: ")
print(gram_schmidt.a)

print()
print("The b Vector: (the result)")
print(gram_schmidt.b)


# Building the Q matrix
gram_schmidt.build_q_matrix()
print()
print("The Q Matrix: ")
print(gram_schmidt.q)

# Building the R matrix
gram_schmidt.build_r_matrix()
print()
print("The R Matrix: ")
print(gram_schmidt.r)

print()
print("solving the system: ")
gram_schmidt.solve_system()