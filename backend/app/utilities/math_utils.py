from pandas import DataFrame, Series
import math
from typing import Union

class Math:

    @staticmethod
    def scalar_product(vect_x: Series, vect_y: Series) -> Series:
        if vect_x.size != vect_y.size:
            raise Exception("Vectors must have same size")

        vect_s = vect_x.dot(vect_y)

        return vect_s


    @staticmethod
    def mult_vect_by(vect: Series, scalar: float) -> Series:
        return vect.mul(scalar)

    
    @staticmethod
    def matrix_multiplication(matrix_a: Union[DataFrame, Series], matrix_b: Union[DataFrame, Series]) -> Union[DataFrame, Series]:
        matrix_a_shape = matrix_a.shape
        matrix_b_shape = matrix_b.shape
        if matrix_a_shape[1] != matrix_b_shape[0]:
            raise Exception("Cannot multiply matrices the number of columns of the first matrix must be equal to the number of rows of the second one.")

        return matrix_a.dot(matrix_b)


    @staticmethod
    def norm(vect: Series):
        result = 0
        for i in range(0, vect.size):
            result+= math.pow(vect[i], 2)

        return math.sqrt(result)