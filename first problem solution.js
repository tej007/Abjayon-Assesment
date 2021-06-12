let num_list = [1, 3, 5, 7, 9, 11]
let length_of_arr = 6
let rotation_times = 25
let number_of_rotations = rotation_times % length_of_arr
let first_part = num_list.slice(0, number_of_rotations)
let second_part = num_list.slice(number_of_rotations, length_of_arr)
let result = (second_part.concat(first_part))
console.log(...result)