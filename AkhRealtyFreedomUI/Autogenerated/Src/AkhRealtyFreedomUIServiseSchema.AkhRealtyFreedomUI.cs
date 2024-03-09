﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AkhRealtyFreedomUIServiseSchema

	/// <exclude/>
	public class AkhRealtyFreedomUIServiseSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AkhRealtyFreedomUIServiseSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AkhRealtyFreedomUIServiseSchema(AkhRealtyFreedomUIServiseSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("49ab4366-040e-4509-97fa-9427479d97c3");
			Name = "AkhRealtyFreedomUIServise";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("70167f66-6be3-4fc5-a472-97981dfe2b96");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,84,77,79,219,64,16,61,59,191,98,235,147,45,165,150,122,133,82,41,105,147,40,149,32,8,167,226,128,122,88,236,73,178,98,63,204,238,44,96,65,254,59,179,246,130,156,170,80,113,170,15,137,119,230,237,155,55,111,103,173,185,2,215,240,10,216,26,172,229,206,108,176,248,110,244,70,108,189,229,40,140,30,61,142,24,61,222,9,189,101,101,235,16,84,81,130,189,19,21,156,154,26,228,241,40,121,51,87,92,194,245,187,249,73,133,226,174,43,243,10,27,202,176,80,252,152,254,37,67,180,148,85,106,176,173,103,255,179,88,0,150,224,28,21,40,145,35,80,254,42,10,160,38,209,242,10,127,83,104,226,154,51,64,98,108,72,203,181,144,2,219,11,184,245,194,130,2,141,46,27,46,130,112,118,194,254,177,37,160,138,24,168,115,170,209,248,107,41,42,86,73,238,28,187,0,46,177,141,66,216,17,155,114,7,113,53,102,75,202,214,43,45,219,161,240,81,242,56,74,146,171,85,3,253,169,12,212,39,87,212,229,82,223,153,27,200,78,1,119,166,38,121,233,249,170,92,167,99,54,53,117,91,98,43,131,100,130,157,18,37,223,194,107,180,184,180,188,105,160,30,19,77,18,228,130,195,185,177,138,227,1,190,15,21,63,157,209,99,18,239,26,163,29,188,143,163,158,99,203,53,84,66,113,201,22,128,107,131,92,78,148,241,26,167,237,186,109,96,89,103,14,109,56,48,219,89,210,199,198,236,32,184,218,108,192,198,76,208,25,147,100,51,153,126,70,243,155,83,52,216,147,136,13,139,124,197,210,157,121,41,87,118,166,26,108,179,33,123,206,158,158,216,59,168,65,185,64,156,36,111,193,7,2,58,96,39,33,177,128,222,106,246,249,203,113,88,238,195,79,9,18,42,100,174,255,59,97,26,238,89,31,203,126,57,176,116,150,154,222,233,84,251,122,52,218,210,43,157,205,189,174,138,210,171,44,157,220,236,206,45,13,71,154,71,196,220,26,149,29,26,64,209,203,29,88,232,208,189,252,52,39,197,179,91,207,101,214,83,22,231,220,18,28,193,102,65,195,194,139,250,208,154,23,254,137,174,59,158,129,23,31,32,27,58,24,25,185,139,29,119,174,188,140,132,5,231,101,112,164,183,166,152,61,64,229,17,202,138,75,110,191,70,212,183,44,239,54,69,99,251,61,33,178,255,216,141,88,204,254,247,133,32,206,120,39,226,8,211,149,152,61,112,213,72,200,242,238,43,27,158,199,65,179,105,248,42,128,13,77,83,137,26,106,118,47,112,119,196,104,177,253,148,30,191,238,217,19,247,126,180,127,6,247,216,152,110,205,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("49ab4366-040e-4509-97fa-9427479d97c3"));
		}

		#endregion

	}

	#endregion

}

