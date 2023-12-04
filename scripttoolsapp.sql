USE [master]
GO
/****** Object:  Database [ToolsApp]    Script Date: 12/4/2023 08:46:11 AM ******/
CREATE DATABASE [ToolsApp]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ToolsApp', FILENAME = N'/var/opt/mssql/data/ToolsApp.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ToolsApp_log', FILENAME = N'/var/opt/mssql/data/ToolsApp_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ToolsApp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ToolsApp] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ToolsApp] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ToolsApp] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ToolsApp] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ToolsApp] SET ARITHABORT OFF 
GO
ALTER DATABASE [ToolsApp] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ToolsApp] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [ToolsApp] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ToolsApp] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ToolsApp] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ToolsApp] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ToolsApp] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ToolsApp] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ToolsApp] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ToolsApp] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ToolsApp] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ToolsApp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ToolsApp] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ToolsApp] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ToolsApp] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ToolsApp] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ToolsApp] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ToolsApp] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ToolsApp] SET RECOVERY FULL 
GO
ALTER DATABASE [ToolsApp] SET  MULTI_USER 
GO
ALTER DATABASE [ToolsApp] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ToolsApp] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ToolsApp] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ToolsApp] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ToolsApp', N'ON'
GO
USE [ToolsApp]
GO
/****** Object:  StoredProcedure [dbo].[AddDocumentControls]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddDocumentControls]

@Code nvarchar(50),
@Type int,
@UserRef int,
@SecondUserRef int,
@FiscalYearRef int,
@StatesRef int,
@CurrentState int,
@RegisterDate date,
@Date date

AS
BEGIN
	insert into DocumentControl(Code,Type,UserRef,SecondUserRef,FiscalYearRef,StatesRef,CurrentState,RegisterDate,Date)
	values(@Code,@Type,@UserRef,@SecondUserRef,@FiscalYearRef,@StatesRef,@CurrentState,@RegisterDate,@Date)
	select SCOPE_IDENTITY() as Id
END


GO
/****** Object:  StoredProcedure [dbo].[AddFiscalYears]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddFiscalYears]
@Title nvarchar(500),
@Code nvarchar(50),
@Id int
AS
BEGIN
if(@Id =0)
	insert into FiscalYears(Title,Code)
	values(@Title,@Code)
	else
		UPDATE       FiscalYears
SET                Title = @Title, Code = @Code
where Id=@Id
END


GO
/****** Object:  StoredProcedure [dbo].[AddGroupOfSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddGroupOfSets] 
--@GroupRef int,
--@SetsRef int,
--@Count float
@jsonData nvarchar(max)
AS
BEGIN
	
		insert into GroupsOfSets(GroupRef,SetsRef,Count)
		Select 
       JSON_VALUE(value,'$.GroupRef') as GroupRef
      , JSON_VALUE(value,'$.SetsRef') as SetsRef
      , JSON_VALUE(value,'$.Count') as Count
    FROM OPENJSON(@jsonData)
		--values(@GroupRef,@SetsRef,@Count)

END


GO
/****** Object:  StoredProcedure [dbo].[AddGroups]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddGroups]
@Title nvarchar(500),
@Code nvarchar(50),
@Id int
AS
BEGIN
if(@Id =0)
	insert into Groups(Title,Code)
	values(@Title,@Code)
	else
		UPDATE       Groups
SET                Title = @Title, Code = @Code
where Id=@Id
END


GO
/****** Object:  StoredProcedure [dbo].[AddParts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddParts]
@Title nvarchar(500),
@Code nvarchar(50),
@Id int,
@Active int
AS
BEGIN
if(@Id =0)
	insert into Parts(Title,Code,Active)
	values(@Title,@Code,@Active)
	else
		UPDATE       Parts
SET                Title = @Title, Code = @Code,Active=@Active
where Id=@Id
END


GO
/****** Object:  StoredProcedure [dbo].[AddPosts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddPosts]
@Title nvarchar(500),
@Code nvarchar(50),
@Id int
AS
BEGIN
if(@Id =0)
	insert into Post(Title,Code)
	values(@Title,@Code)
	else
		UPDATE       Post
SET                Title = @Title, Code = @Code
where Id=@Id
END


GO
/****** Object:  StoredProcedure [dbo].[AddProductDocuments]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddProductDocuments]

@jsonData nvarchar(max)
AS
BEGIN
	
		INSERT INTO ProductDocuments
                         (ProductRef, Counts, Details, DocumentsRef)

		Select 
       JSON_VALUE(value,'$.ProductRef') as ProductRef,
	    JSON_VALUE(value,'$.Counts') as Counts ,
		JSON_VALUE(value,'$.Details') as Details,
		JSON_VALUE(value,'$.DocumentsRef') as DocumentsRef
    FROM OPENJSON(@jsonData)

END


GO
/****** Object:  StoredProcedure [dbo].[AddProducts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddProducts]
@Title nvarchar(500),
@Code nvarchar(50),
@Id int,
@UnitRef int,
@Active int
AS
BEGIN
	 
	 if(@Id= 0)
	 insert into Product(Title,Code,UnitRef,Active)
	 values(@Title,@Code,@UnitRef,@Active)
	 else
	UPDATE       Product
SET                Title = @Title, Code = @Code, UnitRef = @UnitRef,Active=@Active
where Id=@Id

END


GO
/****** Object:  StoredProcedure [dbo].[AddSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddSets]
@Title nvarchar(500),
@Code nvarchar(50),
@Details nvarchar(max),
@Id int
AS
BEGIN
if(@Id =0)
	insert into Sets(Title,Code,Details)
	values(@Title,@Code,@Details)
	else
		UPDATE       Sets
SET                Title = @Title, Code = @Code,Details =@Details
where Id=@Id
END


GO
/****** Object:  StoredProcedure [dbo].[AddSetsDocuments]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddSetsDocuments]

@jsonData nvarchar(max)
AS
BEGIN
	
INSERT INTO SetsDocuments
                         ( SetsRef,  Counts ,Details,  DocumentsRef)

		Select 
       --JSON_VALUE(value,'$.GroupRef') as GroupRef,
	      JSON_VALUE(value,'$.SetsRef') as SetsRef,
    	    JSON_VALUE(value,'$.Counts') as Counts ,
		JSON_VALUE(value,'$.Details') as Details,
			--JSON_VALUE(value,'$.ProductRef') as ProductRef,
			--	JSON_VALUE(value,'$.ProductCounts') as ProductCounts,
		JSON_VALUE(value,'$.DocumentsRef') as DocumentsRef
    FROM OPENJSON(@jsonData)

END


GO
/****** Object:  StoredProcedure [dbo].[AddSetsOfProduct]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddSetsOfProduct] 

--@SetsRef int,
--@ProductRef int,
--@Counts float
@jsonData nvarchar(max)
AS
BEGIN
	
		insert into SetsOfProduct(SetsRef,ProductRef,Counts)
		Select 
       JSON_VALUE(value,'$.SetsRef') as SetsRef
      , JSON_VALUE(value,'$.ProductRef') as ProductRef
      , JSON_VALUE(value,'$.Counts') as Counts
    FROM OPENJSON(@jsonData)
		--values(@SetsRef,@ProductRef,@Counts)
END


GO
/****** Object:  StoredProcedure [dbo].[AddStates]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddStates]
@Title nvarchar(500),
@Code nvarchar(50),
@Id int,
@StateType int
AS
BEGIN
	 
	 if(@Id= 0)
	 insert into States(Title,Code,StateType)
	 values(@Title,@Code,@StateType)
	 else
	UPDATE       States
SET                Title = @Title, Code = @Code, StateType = @StateType
where Id=@Id

END


GO
/****** Object:  StoredProcedure [dbo].[AddUnits]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddUnits]
@Title nvarchar(500),
@Code nvarchar(50),
@Id int
AS
BEGIN
if(@Id =0)
	insert into Units(Title,Code)
	values(@Title,@Code)
	else
		UPDATE       Units
SET                Title = @Title, Code = @Code
where Id=@Id
END


GO
/****** Object:  StoredProcedure [dbo].[AddUsers]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddUsers]

@Username nvarchar(500),
@Password nvarchar(max),
@PostRef int,
@Active int,
@Id int

AS
BEGIN

		if(@Id =0)
	 insert into Users(Username,Password,PostRef,Active)
	  values(@Username,@Password,@PostRef,@Active)
	  else

	UPDATE       Users
SET                Username = @Username, PostRef = @PostRef, Active = @Active
where Id=@Id


END


GO
/****** Object:  StoredProcedure [dbo].[AddUsersAccessParts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddUsersAccessParts] 

--@PostRef int ,@PartRef int,@TypeAccess int
 @jsonData NVARCHAR(MAX)
AS
BEGIN
	
	  insert into UsersAccessParts(PostRef,PartRef,Adds,Deletes,Edit,Prints,Shower)
	   Select 
       JSON_VALUE(value,'$.PostRef') as PostRef
      , JSON_VALUE(value,'$.PartRef') as PartRef
      , JSON_VALUE(value,'$.Adds') as Adds
	    , JSON_VALUE(value,'$.Deletes') as Deletes
		  , JSON_VALUE(value,'$.Edit') as Edit
		    , JSON_VALUE(value,'$.Prints') as Prints
			  , JSON_VALUE(value,'$.Shower') as Shower
    FROM OPENJSON(@jsonData)
	  --values(@PostRef,@PartRef,@TypeAccess)
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteDocumentControls]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[DeleteDocumentControls]

@Id int
AS
BEGIN


		delete from ProductDocuments where DocumentsRef=@Id
		delete from SetsDocuments where DocumentsRef=@Id
		delete from DocumentControl where Id=@Id

END


GO
/****** Object:  StoredProcedure [dbo].[DeleteDocumentControlsProduct]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[DeleteDocumentControlsProduct]

@Id int
AS
BEGIN



				delete from ProductDocuments where DocumentsRef=@Id

END


GO
/****** Object:  StoredProcedure [dbo].[DeleteDocumentControlsSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[DeleteDocumentControlsSets]

@Id int
AS
BEGIN



		delete from SetsDocuments where DocumentsRef=@Id

END


GO
/****** Object:  StoredProcedure [dbo].[DeleteFiscalYear]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteFiscalYear]
@Id int
AS
BEGIN
		DELETE FROM FiscalYears
WHERE        (Id = @Id)
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteGroupOfSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteGroupOfSets] 
@GroupRef int
AS
BEGIN
	
		DELETE FROM GroupsOfSets
		where GroupRef=@GroupRef 

END


GO
/****** Object:  StoredProcedure [dbo].[DeleteGroups]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteGroups]
@Id int
AS
BEGIN
		DELETE FROM Groups
WHERE        (Id = @Id)
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteParts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteParts]
@Id int
AS
BEGIN
		DELETE FROM Parts
WHERE        (Id = @Id)
END


GO
/****** Object:  StoredProcedure [dbo].[DeletePosts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeletePosts]
@Id int
AS
BEGIN
		DELETE FROM Post
WHERE        (Id = @Id)
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteProducts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteProducts]
@Id int
AS
BEGIN
DELETE FROM Product
where Id=@Id
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteSets]
@Id int
AS
BEGIN
		DELETE FROM Sets
WHERE        (Id = @Id)
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteSetsOfProduct]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteSetsOfProduct] 

@SetsRef int
AS
BEGIN
	
	DELETE FROM SetsOfProduct
	where SetsRef=@SetsRef
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteStates]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteStates]
@Id int
AS
BEGIN
DELETE FROM States
where Id=@Id
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteUnits]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteUnits]
@Id int
AS
BEGIN
		DELETE FROM Units
WHERE        (Id = @Id)
END


GO
/****** Object:  StoredProcedure [dbo].[DeleteUsersAccessParts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteUsersAccessParts] 

@PostRef int 
AS
BEGIN
	
DELETE FROM UsersAccessParts
where PostRef=@PostRef 

END


GO
/****** Object:  StoredProcedure [dbo].[DeleteUsersWithUsername]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteUsersWithUsername]
@Username nvarchar(500)
AS
BEGIN
DELETE FROM Users
where Username=@Username
END


GO
/****** Object:  StoredProcedure [dbo].[GetAllUsers]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetAllUsers]

AS
BEGIN
	SELECT        U.Id, Username, Password, PostRef,P.Title as PostTitle, Active
FROM            Users as U
join Post as P on P.Id=U.PostRef 
END


GO
/****** Object:  StoredProcedure [dbo].[GetDocumentControlsProduct]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetDocumentControlsProduct]


AS
BEGIN
SELECT        DC.Id, DC.Code, DC.Type, PD.Id AS ProductDocumentsId, PD.ProductRef, 
DC.UserRef, DC.SecondUserRef, DC.FiscalYearRef, DC.StatesRef, DC.CurrentState, DC.RegisterDate, DC.Date, PD.Counts, PD.Details, PD.DocumentsRef
FROM            DocumentControl AS DC  JOIN
                         ProductDocuments AS PD ON PD.DocumentsRef = DC.Id AND DC.Type = 1
END


GO
/****** Object:  StoredProcedure [dbo].[GetDocumentControlsSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetDocumentControlsSets]


AS
BEGIN
SELECT  distinct      DC.Id, DC.Code, DC.Type, PD.Id AS SetsDocumentsId, PD.GroupRef,
PD.SetsRef, DC.StatesRef, Dc.UserRef, Dc.SecondUserRef, Dc.FiscalYearRef, PD.Counts, dc.CurrentState, DC.RegisterDate, dc.Date, PD.Details, 
                         PD.DocumentsRef
FROM            DocumentControl AS DC  JOIN
                         SetsDocuments AS PD ON PD.DocumentsRef = DC.Id AND DC.Type = 2
END


GO
/****** Object:  StoredProcedure [dbo].[GetFiscalYears]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetFiscalYears]

AS
BEGIN
	SELECT        Id,Title, Code
FROM            FiscalYears
END


GO
/****** Object:  StoredProcedure [dbo].[GetGroupOfSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetGroupOfSets] 
@GroupRef int
AS
BEGIN
	
SELECT        GS.Id, GroupRef,G.Title as GroupTitle, SetsRef,S.Title as SetsTitle, Count
FROM            GroupsOfSets as GS
join sets as S on S.Id=GS.SetsRef
join Groups as G on G.Id=GS.GroupRef
where  GS.GroupRef= @GroupRef


END


GO
/****** Object:  StoredProcedure [dbo].[GetGroups]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetGroups]

AS
BEGIN
	SELECT        Id,Title, Code
FROM            Groups
END


GO
/****** Object:  StoredProcedure [dbo].[GetKardex]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetKardex] 
@ProductRef int,
@FiscalYearRef int
AS
BEGIN
	SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id,sum(PD.Counts) as InsertValue,0 as ExitValue
	,Pd.ProductRef,Pd.Details,P.Title as ProductTitle
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
join ProductDocuments as Pd on Pd.DocumentsRef = DC.Id
join Product as P on P.Id = Pd.ProductRef
where DC.Type=1 and FiscalYearRef =@FiscalYearRef and S.StateType=1 and PD.ProductRef = @ProductRef

group by  UserRef,U.Username , SecondUserRef,UU.Title
	, FiscalYearRef,F.Title
	, StatesRef,S.Title,S.StateType, CurrentState, RegisterDate, [Date],DC.Type,DC.Id,Pd.ProductRef,Pd.Details,P.Title


	union
		SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id,sum(SD.Counts * Sp.Counts) as InsertValue,0 as ExitValue
	,Sp.ProductRef,SD.Details,P.Title as ProductTitle
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
join SetsDocuments as SD on SD.DocumentsRef = DC.Id
join SetsOfProduct as SP on SP.SetsRef = SD.SetsRef
join Product as P on P.Id = SP.ProductRef
where DC.Type=2 and FiscalYearRef =@FiscalYearRef and S.StateType=1 
and SP.ProductRef = @ProductRef

group by  UserRef,U.Username , SecondUserRef,UU.Title
	, FiscalYearRef,F.Title
	, StatesRef,S.Title,S.StateType, CurrentState, RegisterDate, [Date],DC.Type,DC.Id,Sp.ProductRef,sd.Details,P.Title



union 
	SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id,0 as InsertValue,sum(PD.Counts) as ExitValue
	,Pd.ProductRef,Pd.Details,P.Title as ProductTitle
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
join ProductDocuments as Pd on Pd.DocumentsRef = DC.Id
join Product as P on P.Id = Pd.ProductRef
where DC.Type=1 and FiscalYearRef =@FiscalYearRef and S.StateType=2  and PD.ProductRef = @ProductRef

group by  UserRef,U.Username , SecondUserRef,UU.Title
	, FiscalYearRef,F.Title
	, StatesRef,S.Title,S.StateType, CurrentState, RegisterDate, [Date],DC.Type,DC.Id,Pd.ProductRef,Pd.Details,P.Title


	union

			SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id,0 as InsertValue,sum(SD.Counts * Sp.Counts) as ExitValue
	,Sp.ProductRef,SD.Details,P.Title as ProductTitle
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
join SetsDocuments as SD on SD.DocumentsRef = DC.Id
join SetsOfProduct as SP on SP.SetsRef = SD.SetsRef
join Product as P on P.Id = SP.ProductRef
where DC.Type=2 and FiscalYearRef =@FiscalYearRef and S.StateType=2 
and SP.ProductRef = @ProductRef

group by  UserRef,U.Username , SecondUserRef,UU.Title
	, FiscalYearRef,F.Title
	, StatesRef,S.Title,S.StateType, CurrentState, RegisterDate, [Date],DC.Type,DC.Id,Sp.ProductRef,sd.Details,P.Title




END

GO
/****** Object:  StoredProcedure [dbo].[GetKardexSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
	create  PROCEDURE [dbo].[GetKardexSets]
	@SetsRef int,
@FiscalYearRef int
as
	begin 
	
		SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id,sum(SD.Counts) as InsertValue,0 as ExitValue
	,SD.Details,SS.Title as SetsTitle,SP.SetsRef
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
join SetsDocuments as SD on SD.DocumentsRef = DC.Id
join SetsOfProduct as SP on SP.SetsRef = SD.SetsRef
join Sets as SS on SS.Id = SP.SetsRef
where DC.Type=2 and FiscalYearRef =@FiscalYearRef and S.StateType=1 
and SS.Id = @SetsRef

group by  UserRef,U.Username , SecondUserRef,UU.Title
	, FiscalYearRef,F.Title
	, StatesRef,S.Title,S.StateType, CurrentState, RegisterDate, [Date],DC.Type,DC.Id,sd.Details,SS.Title,SP.SetsRef



union 


			SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id,0 as InsertValue,sum(SD.Counts) as ExitValue
	,SD.Details,SS.Title as SetsTitle,SP.SetsRef
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
join SetsDocuments as SD on SD.DocumentsRef = DC.Id
join SetsOfProduct as SP on SP.SetsRef = SD.SetsRef
join Sets as SS on SS.Id = SP.SetsRef
where DC.Type=2 and FiscalYearRef =@FiscalYearRef and S.StateType=2 
and SS.Id = @SetsRef

group by  UserRef,U.Username , SecondUserRef,UU.Title
	, FiscalYearRef,F.Title
	, StatesRef,S.Title,S.StateType, CurrentState, RegisterDate, [Date],DC.Type,DC.Id,sd.Details,SS.Title,SP.SetsRef


	end


GO
/****** Object:  StoredProcedure [dbo].[GetParts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetParts]

AS
BEGIN
	SELECT        Id,Title, Code,Active
FROM            Parts
END


GO
/****** Object:  StoredProcedure [dbo].[GetPosts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetPosts]

AS
BEGIN
	SELECT        Id,Title, Code
FROM            Post
END


GO
/****** Object:  StoredProcedure [dbo].[GetPostsAccessParts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetPostsAccessParts] 

@PostRef int 
AS
BEGIN
	
SELECT   distinct     UA.PostRef, PartRef,P.Title as PartTitle,PP.Title AS PostTitle,UA.Adds,UA.Deletes,UA.Edit,UA.Prints,UA.Shower
FROM            UsersAccessParts as UA
JOIN Post AS pP ON pP.Id = UA.PostRef
join Parts as P on P.Id = UA.PartRef 
WHERE        (UA.PostRef = @PostRef)

END


GO
/****** Object:  StoredProcedure [dbo].[GetProductDocumentData]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetProductDocumentData]
@DocumentsRef int
AS
BEGIN
	SELECT DISTINCT  Pd.ProductRef, Pd.Counts, Pd.Details, Pd.DocumentsRef,P.Id as ProductId,P.Title as ProductTitle,P.UnitRef,U.Title as UnitTitle,P.Code as ProductCode
FROM            ProductDocuments Pd INNER JOIN
                         Product P ON P.Id = Pd.ProductRef
						 join Units as U on U.Id = P.UnitRef
						 where Pd.DocumentsRef =  @DocumentsRef

END

GO
/****** Object:  StoredProcedure [dbo].[GetProducts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetProducts]

AS
BEGIN
	SELECT        P.Id, P.Title, P.Code, UnitRef,U.Title as UnitTitle, Active
FROM            Product as P
join Units as U on U.Id=P.UnitRef
END


GO
/****** Object:  StoredProcedure [dbo].[GetProductsDocuments]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetProductsDocuments]
@FiscalYearRef int
AS
BEGIN
	
	SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
where DC.Type=1 and FiscalYearRef =@FiscalYearRef

END


GO
/****** Object:  StoredProcedure [dbo].[GetProductsDocumentsWithId]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetProductsDocumentsWithId]
@FiscalYearRef int,@Id int
AS
BEGIN
	
	SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
where DC.Type=1 and FiscalYearRef =@FiscalYearRef and DC.Id=@Id

end
GO
/****** Object:  StoredProcedure [dbo].[GetSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetSets]

AS
BEGIN
	SELECT        Id,Title, Code,Details
FROM            Sets
END


GO
/****** Object:  StoredProcedure [dbo].[GetSetsDocumentData]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetSetsDocumentData]
@DocumentsRef int
AS
BEGIN
	SELECT DISTINCT  S.Title, S.Code,SD.Counts, SD.Details,SD.DocumentsRef, S.Id AS SetsId, S.Title AS SetsTitle,S.Code as SetsCode
FROM            SetsDocuments SD INNER JOIN
                         Sets S ON S.Id = SD.SetsRef
						 where SD.DocumentsRef =  @DocumentsRef

END

GO
/****** Object:  StoredProcedure [dbo].[GetSetsDocuments]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetSetsDocuments]
@FiscalYearRef int
AS
BEGIN
	
SELECT   distinct      StatesRef,S.Title as StatesTitle, UserRef,U.Username, SecondUserRef,UU.Title as SecondUsername
, FiscalYearRef,F.Title as FiscalTitle, CurrentState, RegisterDate, [Date], DC.Id
FROM     DocumentControl as DC 
join Users as U on U.Id = DC.UserRef
join Groups as UU on UU.Id=DC.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
where DC.Type=2 and FiscalYearRef =@FiscalYearRef

END


GO
/****** Object:  StoredProcedure [dbo].[GetSetsDocumentsWithId]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[GetSetsDocumentsWithId]
@FiscalYearRef int,@Id int
AS
BEGIN
	
	SELECT  distinct     UserRef,U.Username , SecondUserRef,UU.Title as SecondUsername
	, FiscalYearRef,F.Title as FiscalTitle
	, StatesRef,S.Title as StatesTitle,S.StateType, CurrentState, RegisterDate, [Date],DC.Type as DocumentsType,DC.Id
FROM     DocumentControl as DC 
join Users as U on U.Id = dc.UserRef
join Groups as UU on UU.Id=Dc.SecondUserRef
join States as S on S.Id = DC.StatesRef
join FiscalYears as F on F.Id = DC.FiscalYearRef
where DC.Type=2 and FiscalYearRef =@FiscalYearRef and DC.Id=@Id
end
GO
/****** Object:  StoredProcedure [dbo].[GetSetsOfProducts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetSetsOfProducts] 
@SetsRef int
AS
BEGIN
	
SELECT        SP.Id, SetsRef,S.Title as SetsTitle,P.Title as ProductTitle, SP.ProductRef, SP.Counts

FROM            SetsOfProduct as SP
join sets as S on S.Id=SP.SetsRef
join Product as P on P.Id=SP.ProductRef
where SetsRef = @SetsRef

END


GO
/****** Object:  StoredProcedure [dbo].[GetStates]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetStates]
AS
BEGIN
SELECT        Id, Title, Code, StateType
FROM            States
END


GO
/****** Object:  StoredProcedure [dbo].[GetUnits]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetUnits]

AS
BEGIN
	SELECT        Id,Title, Code
FROM            Units
END


GO
/****** Object:  StoredProcedure [dbo].[GetUsersAccessParts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetUsersAccessParts] 

@PostRef int 
AS
BEGIN
	
SELECT   distinct     UA.PostRef, PartRef,P.Title as PartTitle,PP.Title AS PostTitle,UA.Adds,UA.Deletes,UA.Edit,UA.Prints,UA.Shower
FROM            UsersAccessParts as UA
JOIN Post AS pP ON pP.Id = UA.PostRef
join Parts as P on P.Id = UA.PartRef 
WHERE        (UA.PostRef = @PostRef)

END


GO
/****** Object:  StoredProcedure [dbo].[GetUsersWithUsername]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetUsersWithUsername]
@Username nvarchar(500)
AS
BEGIN
	SELECT        U.Id, Username, Password, PostRef,P.Title as PostTitle, Active
FROM            Users as U
join Post as P on P.Id=U.PostRef 
where Username=@Username
END


GO
/****** Object:  StoredProcedure [dbo].[GetUsersWithUsernameandPass]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetUsersWithUsernameandPass]
@Username nvarchar(500),
@PassWord nvarchar(max)
AS
BEGIN
	SELECT        U.Id, Username, PostRef,P.Title as PostTitle, Active
FROM            Users as U
join Post as P on P.Id=U.PostRef 
where U.Username=@Username and [Password]=@PassWord 
END


GO
/****** Object:  StoredProcedure [dbo].[ResetPassword]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ResetPassword]
@Username nvarchar(500),@Password nvarchar(max)
AS
BEGIN
	update Users set Password=@Password
	where Username=@Username
END


GO
/****** Object:  StoredProcedure [dbo].[UpdateDocumentControls]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[UpdateDocumentControls]

@Code nvarchar(50),
@Type int,
@UserRef int,
@SecondUserRef int,
@FiscalYearRef int,
@StatesRef int,
@CurrentState int,
@RegisterDate date,
@Date date,
@Id int

AS
BEGIN
	update DocumentControl set Code=@Code,Type=@Type,UserRef=@UserRef,SecondUserRef=@SecondUserRef,
	FiscalYearRef=@FiscalYearRef,StatesRef=@StatesRef,CurrentState=@CurrentState
	,RegisterDate=@RegisterDate,Date=@Date
	where Id=@Id
	
END


GO
/****** Object:  Table [dbo].[DocumentControl]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DocumentControl](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NULL,
	[Type] [int] NULL,
	[UserRef] [int] NULL,
	[SecondUserRef] [int] NULL,
	[FiscalYearRef] [int] NULL,
	[StatesRef] [int] NULL,
	[CurrentState] [int] NULL,
	[RegisterDate] [date] NULL,
	[Date] [date] NULL,
 CONSTRAINT [PK_DocumentControl] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[FiscalYears]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FiscalYears](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Code] [nvarchar](50) NULL,
 CONSTRAINT [PK_FiscalYears] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Groups]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Groups](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Code] [nvarchar](50) NULL,
 CONSTRAINT [PK_Groups] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[GroupsOfSets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GroupsOfSets](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[GroupRef] [int] NULL,
	[SetsRef] [int] NULL,
	[Count] [float] NULL,
 CONSTRAINT [PK_GroupsOfSets] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Parts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Parts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Code] [nvarchar](50) NULL,
	[Active] [int] NULL,
 CONSTRAINT [PK_Parts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Post]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Post](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Code] [nvarchar](50) NULL,
 CONSTRAINT [PK_Post] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Product]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Code] [nvarchar](50) NULL,
	[UnitRef] [int] NULL,
	[Active] [int] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ProductDocuments]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductDocuments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductRef] [int] NULL,
	[Counts] [float] NULL,
	[Details] [nvarchar](max) NULL,
	[DocumentsRef] [int] NULL,
 CONSTRAINT [PK_ProductDocuments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Sets]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sets](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Code] [nvarchar](50) NULL,
	[Details] [nvarchar](max) NULL,
 CONSTRAINT [PK_Sets] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SetsDocuments]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SetsDocuments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[GroupRef] [int] NULL,
	[SetsRef] [int] NULL,
	[Counts] [float] NULL,
	[Details] [nvarchar](max) NULL,
	[ProductRef] [int] NULL,
	[ProductCounts] [float] NULL,
	[DocumentsRef] [int] NULL,
 CONSTRAINT [PK_SetsDocuments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SetsOfProduct]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SetsOfProduct](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SetsRef] [int] NULL,
	[ProductRef] [int] NULL,
	[Counts] [float] NULL,
 CONSTRAINT [PK_SetsAccessProduct] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[States]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[States](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Code] [nvarchar](50) NULL,
	[StateType] [int] NULL,
 CONSTRAINT [PK_States] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Units]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Units](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](500) NULL,
	[Code] [nvarchar](50) NULL,
 CONSTRAINT [PK_Units] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](500) NULL,
	[Password] [nvarchar](max) NULL,
	[PostRef] [int] NULL,
	[Active] [int] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UsersAccessParts]    Script Date: 12/4/2023 08:46:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsersAccessParts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PostRef] [int] NULL,
	[PartRef] [int] NULL,
	[Shower] [int] NULL,
	[Edit] [int] NULL,
	[Adds] [int] NULL,
	[Prints] [int] NULL,
	[Deletes] [int] NULL,
 CONSTRAINT [PK_UsersAccessParts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[GroupsOfSets]  WITH CHECK ADD  CONSTRAINT [FK_GroupsOfSets_Groups] FOREIGN KEY([GroupRef])
REFERENCES [dbo].[Groups] ([Id])
GO
ALTER TABLE [dbo].[GroupsOfSets] CHECK CONSTRAINT [FK_GroupsOfSets_Groups]
GO
ALTER TABLE [dbo].[GroupsOfSets]  WITH CHECK ADD  CONSTRAINT [FK_GroupsOfSets_Sets] FOREIGN KEY([SetsRef])
REFERENCES [dbo].[Sets] ([Id])
GO
ALTER TABLE [dbo].[GroupsOfSets] CHECK CONSTRAINT [FK_GroupsOfSets_Sets]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [UnitRef_PK] FOREIGN KEY([UnitRef])
REFERENCES [dbo].[Units] ([Id])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [UnitRef_PK]
GO
ALTER TABLE [dbo].[SetsOfProduct]  WITH CHECK ADD  CONSTRAINT [FK_SetsAccessProduct_Product] FOREIGN KEY([ProductRef])
REFERENCES [dbo].[Product] ([Id])
GO
ALTER TABLE [dbo].[SetsOfProduct] CHECK CONSTRAINT [FK_SetsAccessProduct_Product]
GO
ALTER TABLE [dbo].[SetsOfProduct]  WITH CHECK ADD  CONSTRAINT [FK_SetsAccessProduct_Sets] FOREIGN KEY([SetsRef])
REFERENCES [dbo].[Sets] ([Id])
GO
ALTER TABLE [dbo].[SetsOfProduct] CHECK CONSTRAINT [FK_SetsAccessProduct_Sets]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Posts] FOREIGN KEY([PostRef])
REFERENCES [dbo].[Post] ([Id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Posts]
GO
ALTER TABLE [dbo].[UsersAccessParts]  WITH CHECK ADD  CONSTRAINT [FK_UsersAccessParts_Parts] FOREIGN KEY([PartRef])
REFERENCES [dbo].[Parts] ([Id])
GO
ALTER TABLE [dbo].[UsersAccessParts] CHECK CONSTRAINT [FK_UsersAccessParts_Parts]
GO
ALTER TABLE [dbo].[UsersAccessParts]  WITH CHECK ADD  CONSTRAINT [FK_UsersAccessParts_Post] FOREIGN KEY([PostRef])
REFERENCES [dbo].[Post] ([Id])
GO
ALTER TABLE [dbo].[UsersAccessParts] CHECK CONSTRAINT [FK_UsersAccessParts_Post]
GO
USE [master]
GO
ALTER DATABASE [ToolsApp] SET  READ_WRITE 
GO
