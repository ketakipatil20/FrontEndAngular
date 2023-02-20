using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RollOffApi.Models;
using RollOffApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RollOffApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly RollOffDatabaseContext RollOffDatabaseContext;
        private readonly IUserDetails user;
        public UserController(RollOffDatabaseContext ourExcelData, IUserDetails _user)
        {
            RollOffDatabaseContext = ourExcelData;
            user = _user;
        }

        [HttpGet("GetUsers")]
        public async Task<IActionResult> GetUsers()
        {
            var user1 = await user.GetData();
            return Ok(user1);
        }


        [HttpPost("authenticate")]
        public async Task<IActionResult> Authentication([FromBody] Usertable usertable)
        {
            if (usertable == null)
                return BadRequest();
            var user = await RollOffDatabaseContext.Usertables.FirstOrDefaultAsync(x => x.UserName == usertable.UserName && x.Password == usertable.Password);
            if (user == null)
                return NotFound(new { Message = "User Not Found" });
            return Ok(new
            {
                Message = "Login Success!"
            });

        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser([FromBody] Usertable usertable)
        {
            if (usertable == null)
                return BadRequest();
            await RollOffDatabaseContext.Usertables.AddAsync(usertable);
            await RollOffDatabaseContext.SaveChangesAsync();
            return Ok(new
            {
                Message = "User Registered!"
            });
        }
    }
}

