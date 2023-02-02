using System;
using System.ComponentModel.DataAnnotations;

namespace Mission4.Models
{
    public class GradeCalcModel
    {

        //variables make them all required and set validation so number is between 0 - 100
        [Required]
        [Range(0,100)]
        public byte Assignment { get; set; }
        [Required]
        [Range(0, 100)]
        public byte GroupProject { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Finals { get; set; }
        [Required]
        [Range(0, 100)]
        public byte Intex { get; set; }

    }
}
