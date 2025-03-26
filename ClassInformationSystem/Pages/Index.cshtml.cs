using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ClassInformationSystem.Models;

namespace ClassInformationSystem.Pages
{
    public class IndexModel : PageModel
    {
        private static List<ClassInformationModel> _classes = new List<ClassInformationModel>();
        private static int _nextId = 1;

        [BindProperty]
        public ClassInformationModel ClassInfo { get; set; }

        public List<ClassInformationModel> Classes => _classes;

        public void OnGet(int? id, string className, int? studentCount, string description)
        {
            if (id.HasValue)
            {
                ClassInfo = new ClassInformationModel
                {
                    Id = id.Value,
                    ClassName = className,
                    StudentCount = studentCount ?? 0,
                    Description = description
                };
            }
            else
            {
                ClassInfo = new ClassInformationModel();
            }
        }

        public IActionResult OnPostAdd()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            ClassInfo.Id = _nextId++;
            _classes.Add(ClassInfo);
            return RedirectToPage();
        }

        public IActionResult OnPostEdit(int id)
        {
            var classToEdit = _classes.FirstOrDefault(c => c.Id == id);
            if (classToEdit != null)
            {
                classToEdit.ClassName = ClassInfo.ClassName;
                classToEdit.StudentCount = ClassInfo.StudentCount;
                classToEdit.Description = ClassInfo.Description;
            }
            return RedirectToPage();
        }

        public IActionResult OnPostDelete(int id)
        {
            var classToDelete = _classes.FirstOrDefault(c => c.Id == id);
            if (classToDelete != null)
            {
                _classes.Remove(classToDelete);
            }
            return RedirectToPage();
        }
    }
}