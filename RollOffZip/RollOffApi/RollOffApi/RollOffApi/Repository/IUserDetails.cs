using RollOffApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RollOffApi.Repository
{
    public interface IUserDetails
    {
        public Task<IEnumerable<Usertable>> GetData();
        public Task<Usertable> AddUserAsync(Usertable user);
    }
}
