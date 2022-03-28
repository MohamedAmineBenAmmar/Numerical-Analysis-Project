from .gram_schmidt import GramSchmidt
import time
# from datetime import datetime

from fastapi import HTTPException


class GramSchmidtProcessController():
    def __init__(self) -> None:
        pass

    @staticmethod
    def run_gram_schmidt_process(filename: str, sep: str) -> dict:
        # Calculating the global time taekn by the program
        global_start = time.time()

        # Initialization
        gram_schmidt = GramSchmidt(filename, sep)

        # Data extraction
        start = time.time()
        gram_schmidt.extract_data()
        data_extraction_time = time.time() - start

        # Build A matrix and the b vector
        start = time.time()
        gram_schmidt.configure_matrices()

        # Check if the A matrix is square matrix
        if gram_schmidt.a.shape[0] != gram_schmidt.a.shape[1]:
            raise HTTPException(
                status_code=400, detail="The matrix A is not a square matrix, Unable to finish calculations.")

        a_b_extraction_time = time.time() - start

        # Calculate the determinant of the matrix A
        start = time.time()
        det = gram_schmidt.calculate_determinant()

        # Check if the determinant is equal to zero
        if det == 0:
            raise HTTPException(
                status_code=400, detail="The matrix A determinant is equal to 0, Unable to finish calculations.")

        determinant_calculation_time = time.time() - start

        # Calculate the Q matrix
        start = time.time()
        gram_schmidt.build_q_matrix()
        q_calculation_time = time.time() - start

        # Calculate the R matrix
        start = time.time()
        gram_schmidt.build_r_matrix()
        r_calculation_time = time.time() - start

        # Solve the system
        start = time.time()
        gram_schmidt.solve_system()
        system_resolution_time = time.time() - start

        # Rounding all values
        start = time.time()
        gram_schmidt.round_all_values()
        round_calculation_time = time.time() - start

        # The end of the program
        global_end = time.time()

        process_output = {
            "x": {
                "dimensions": {
                    "rows": gram_schmidt.x.size
                },
                "elements": gram_schmidt.x.tolist()
            },
            "b": {
                "dimensions": {
                    "rows": gram_schmidt.b.size
                },
                "elements": gram_schmidt.b.tolist()
            },
            "a": {
                "dimensions": {
                    "rows": gram_schmidt.a.shape[0],
                    "cols": gram_schmidt.a.shape[1],
                },
                "elements": gram_schmidt.a.values.tolist()
            },
            "q": {
                "dimensions": {
                    "rows": gram_schmidt.q.shape[0],
                    "cols": gram_schmidt.q.shape[1],
                },
                "elements": gram_schmidt.q.values.tolist()
            },
            "r": {
                "dimensions": {
                    "rows": gram_schmidt.r.shape[0],
                    "cols": gram_schmidt.r.shape[1],
                },
                "elements": gram_schmidt.r.values.tolist()
            },
            "calculation_time": {
                "labels": ["data_extraction_time", "a_b_extraction_time", "determinant_calculation_time", "q_calculation_time",
                           "r_calculation_time", "system_resolution_time", "round_calculation_time"],

                "data": [data_extraction_time, a_b_extraction_time, determinant_calculation_time, q_calculation_time,
                         r_calculation_time, system_resolution_time, round_calculation_time],

                "global": global_end - global_start
            }

        }
        # print(process_output)
        return process_output
