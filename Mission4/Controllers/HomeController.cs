﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission4.Models;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission4.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        //loads page with calculator
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

        //Change view for my calculations 
        [HttpPost]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
