from typing import List
import pandas as pd
import numpy as np
from pandas import DataFrame, Series

from utilities.math_utils import Math


class GramSchmidt():
    def __init__(self) -> None:
        self.a: DataFrame
        self.q: DataFrame
        self.r: DataFrame

        self.x: Series
        self.b: Series

        self.data: DataFrame
        self.filename: str
        self.sep: str


    def __init__(self, filename: str, sep: str) -> None:
        self.filename = filename
        self.sep = sep

# ---------------- Handling Matrices Q & R --------------------------- 
    def extract_data(self):
        self.data = pd.read_csv(self.filename, header=None, sep=self.sep)

    
    def configure_matrices(self):
        self.a = self.data.iloc[:, 0: self.data.shape[1] -1]
        self.b = self.data[self.data.shape[1] -1]


    def build_q_matrix(self) -> None:
        e = []
        for i in self.a.columns:
            ui = self.a[i]
            
            k = i
            while k >= 1:
                scalar_product_result = Math.scalar_product(self.a[k], e[k -1])
                tmp = Math.mult_vect_by(e[k -1], scalar_product_result)
                ui = ui.subtract(tmp)
                k-= 1            

            e.append(Math.mult_vect_by(ui, 1/Math.norm(ui)))

        self.q = pd.concat(e, axis=1, ignore_index=True)
        


    def build_r_matrix(self) -> None:
        self.r = pd.DataFrame(np.zeros((self.a.shape[1], self.a.shape[1])))
        for i in range(0, self.a.shape[1]):
            for j in range(i, self.a.shape[1]):
                self.r.iloc[i,j] = Math.scalar_product(self.a[j], self.q[i])

            for j in range(1, i):
                self.r.iloc[i,j] = 0

# ------------------------------------------------------------------------------------

# ---------------- Solving the System --------------------------- 
    def solve_system(self) -> Series:
        # Calculate the transpose of the matrix Q
        qt = self.q.T

        # Performing the multiplication between the QT anb the b vector
        new_output = Math.matrix_multiplication(qt, self.b)
        # print('The new output:')
        # print(new_output)

        # Initializing the x list that holds the system resolution
        x = [None for _ in range(self.b.size)]

        # Solve the system
        for i in range(self.r.shape[0] -1, -1, -1):
            # print(self.r.iloc[i,:])
            s = 0
            for j in range(self.r.shape[1] -1, i, -1):
                s+= (self.r.iloc[i,j] * x[j])

            x[i] = (new_output[i] - s) / self.r.iloc[i,i]

        self.x = Series(x)


    # ------------------
    def round_all_values(self):
        self.q = self.q.round(3)
        self.r = self.r.round(3)

        self.a = self.a.round(3)
        self.x = self.x.round(3)
        self.b = self.b.round(3)

    # ------------------------
    def calculate_determinant(self) -> int:
        matrix_a_np_array = self.a.to_numpy()
        # calculating the determinant of matrix
        det = np.linalg.det(matrix_a_np_array)

        return int(det)
        
        
        