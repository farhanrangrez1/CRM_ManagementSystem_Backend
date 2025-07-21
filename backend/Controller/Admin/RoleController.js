const asyncHandler = require('express-async-handler');
const Role = require('../../Model/Admin/RoleModel');
const Permission = require('../../Model/Admin/Permission');

const RoleCreate = asyncHandler(async (req, res) => {
  const { role } = req.body;

  if (!role) {
    res.status(400);
    throw new Error('Role is required');
  }

  const existingRole = await Role.findOne({ role });
  if (existingRole) {
    res.status(400);
    throw new Error('Role already exists');
  }

  const newRole = await Role.create({ role });

  const permissions = [
    // ======= Admin Dashboard =======
    { sidebarName: 'Dashboard', subSidebarName: null, roleId: newRole._id, isEdit: false, isDelete: false, isView: true, isInsert: false, permission: true },
    { sidebarName: 'User_Management', subSidebarName: 'All_Users', roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'User_Management', subSidebarName: 'Buyers', roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'User_Management', subSidebarName: 'Sellers', roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Subscription_Plans', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Coupons', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Domain_Control', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Payment_Logs', subSidebarName: null, roleId: newRole._id, isEdit: false, isDelete: false, isView: true, isInsert: false, permission: true },
    { sidebarName: 'Reports_&_Analytics', subSidebarName: null, roleId: newRole._id, isEdit: false, isDelete: false, isView: true, isInsert: false, permission: true },
    { sidebarName: 'Admin_Settings', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: false, isView: true, isInsert: false, permission: true },

    // ======= Seller Dashboard =======
    { sidebarName: 'Leads', subSidebarName: null, roleId: newRole._id, isEdit: false, isDelete: false, isView: true, isInsert: false, permission: true },
    { sidebarName: 'Sales_Reports', subSidebarName: null, roleId: newRole._id, isEdit: false, isDelete: false, isView: true, isInsert: false, permission: true },
    { sidebarName: 'Customers', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Products', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Domain_Manager', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: false, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Reports', subSidebarName: null, roleId: newRole._id, isEdit: false, isDelete: false, isView: true, isInsert: false, permission: true },
    { sidebarName: 'Settings', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: false, isView: true, isInsert: false, permission: true },

    // ======= Buyer Dashboard =======
    { sidebarName: 'Browse_Products', subSidebarName: null, roleId: newRole._id, isEdit: false, isDelete: false, isView: true, isInsert: false, permission: true },
    { sidebarName: 'My_Inquiries', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: false, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Sellers', subSidebarName: null, roleId: newRole._id, isEdit: false, isDelete: false, isView: true, isInsert: false, permission: true },
    { sidebarName: 'Messages', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: true, isView: true, isInsert: true, permission: true },
    { sidebarName: 'Profile', subSidebarName: null, roleId: newRole._id, isEdit: true, isDelete: false, isView: true, isInsert: false, permission: true },
  ];


  await Permission.insertMany(permissions); // Save all permissions to DB

  res.status(201).json({
    message: 'Role created successfully',
    data: newRole,
  });
});


// GET permissions by role ID
const GetPermissionsByRoleId = asyncHandler(async (req, res) => {
  const { roleId } = req.params;

  if (!roleId) {
    res.status(400);
    throw new Error("Role ID is required");
  }

  // Find permissions linked to this role
  const permissions = await Permission.find({ roleId });

  if (!permissions || permissions.length === 0) {
    return res.status(404).json({ message: "No permissions found for this role." });
  }

  res.status(200).json({
    message: "Permissions fetched successfully",
    data: permissions
  });
});



module.exports = { RoleCreate, GetPermissionsByRoleId };
