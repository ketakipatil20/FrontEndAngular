using Microsoft.EntityFrameworkCore;
using RollOffApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RollOffApi.Repository
{
    public class UserDetails:IUserDetails
    {
        private readonly RollOffDatabaseContext RollOffDatabaseContext;

        public UserDetails(RollOffDatabaseContext ourExcelData)
        {
            this.RollOffDatabaseContext = ourExcelData;
        }

        public async Task<Usertable> AddUserAsync(Usertable user)
        {
            await RollOffDatabaseContext.AddAsync(user);
            await RollOffDatabaseContext.SaveChangesAsync();
            return user;
        }
        public async Task<IEnumerable<Usertable>> GetData()
        {
            return await RollOffDatabaseContext.Usertables.ToListAsync();
        }

    }
}

